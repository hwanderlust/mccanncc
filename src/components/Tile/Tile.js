import React, { PureComponent } from 'react'
import { StoreConsumer } from "../../contexts";
import TileTitle from './TileTitle';
import TileDetails from './TileDetails';
import TilePic from './TilePic';

class Tile extends PureComponent {
  
  // new addition with 16.6 allowing access to context outside of render
  static contextType = StoreConsumer;
  
  constructor(props) {
    super(props)

    this.state = {
      fav: false,
      loaded: false,
      touched: 0,
      timeStamp: 0,
    }

    this.favIcon = React.createRef()
  };

  componentDidMount() {
    if(this.props.fav) {

      this.favIcon.current.className += ` red`;

      this.setState({
        fav: true
      })
    }
  }

  componentWillUnmount() {
    console.log(`UNMOUNT`)
  }

  // CSS classes
  toggleFavClass = () => {

    const iconClass = this.favIcon.current.className;

    if(this.state.fav) {
      this.favIcon.current.className = iconClass.slice(0, iconClass.length - 4);
      
    } else {
      this.favIcon.current.className += ` red`;
    }
  }
  
  // each Tile instance keeps track of its own state and the inside fn are from the Context
  toggleFav = () => {
    const { handleFavoriting, handleUnfavoriting } = this.context
    const { tile } = this.props 

    this.toggleFavClass()

    this.setState(prevState => {
      
      if(prevState.fav) {
        handleUnfavoriting(tile.id)
        
      } else {
        handleFavoriting(tile)
      }
      
      return {
        fav: !prevState.fav
      }
    }, () => {
      console.log(this.state)
    })
  }

  // accessibility via keyboard
  handleKeyPress = (e) => {

    if(e.key === 'Enter') {
      this.toggleFav()
    }
  }

  // pass down higher res pic after thumbnail was loaded for lower bandwiths 
  handleOnload = () => {

    // don't try to change the pic if a thumbnail exists and a higher res pic doesn't
    if(!this.props.tile.picture) {
      return
    }

    this.setState(prevState => {

      if(prevState.loaded) {
        return        
      }

      return {
        loaded: true
      }
    })
  }

  handleOnError = (e) => {

    // rather see the thumbnail than a 404 img due to CORS
    if(this.props.tile.thumbnail) {
      e.target.src = this.props.tile.thumbnail
      return
    }

    const four04 = document.createElement('img')
    four04.src = "http://i.imgur.com/lqHeX.jpg"

    const parent = e.target.parentElement
    e.target.remove()
    parent.appendChild(four04)
  }
  
  
  // for mobiles and tablets - the double tapping for toggle fav-ing something
  handleTouch = (e) => {
    e.persist()
    let previousState;

    this.setState(prevState => {
      previousState = prevState;

      return {
        touched: prevState.touched < 2 ? ++prevState.touched : 1,
        timeStamp: e.timeStamp
      }
    
    }, () => {

      if(this.state.touched === 2 && this.state.timeStamp - previousState.timeStamp <= 1000) {
        this.toggleFav()
      } 
    })
  }

  passPictureDown = () => {
    
    if(this.state.loaded) {
      return this.props.tile.picture
    }

    return this.props.tile.thumbnail
  }
  
  

  render() {
    const { tile, style } = this.props 
    
    return (
      <React.Fragment>
        <div className='tile-wrapper' onTouchStartCapture={this.handleTouch}>
          <div className="tile-container" style={style} onDoubleClick={this.toggleFav} tabIndex='0' >

            <TilePic 
              picture={this.passPictureDown()} 
              alt={`${tile.title} by ${tile.author}`}
              description={tile.description}
              handleOnload={this.handleOnload}
              handleOnError={this.handleOnError} 
            />
            
            <TileTitle title={tile.title} url={tile.url} />
            <TileDetails tile={tile} />
          
          </div>

          <i ref={this.favIcon} className="fab fa-gratipay fav-icon" onClick={this.toggleFav} onKeyPress={this.handleKeyPress} tabIndex='0'/>
        
        </div>
      </React.Fragment>
    )
  }
}

export default Tile