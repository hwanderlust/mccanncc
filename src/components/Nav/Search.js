import React from 'react';
import { StoreConsumer } from '../../contexts';
import { withRouter } from 'react-router-dom';

class Search extends React.PureComponent {

  static contextType = StoreConsumer;

  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.searchInput = React.createRef()
  }
  // state = {
  //   text: ''
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearSearch = () => {
    this.setState({
      text: ''
    })
  }
  
  prepareSearchQuery = () => {
    const query = this.state.text

    return query.replace(' ', '')
  }
  

  handleSubmit = (e) => {
    e.preventDefault()
    // const url = `https://www.reddit.com/subreddits/search.json?q=${this.state.text}`
    console.log(this.state.text)

    const query = this.prepareSearchQuery()
    const url = `https://www.reddit.com/r/${query}/top/.json`;
    const options = {
      method: 'GET',
    }

    fetch(url, options)
    .then(r => { 
      try {
        if(r.ok) {
          return r.json()
        } else {
          throw Error(`Request rejected with ${r.status}`)
        }

      } catch (error) {
        console.log(error)
      }
    })
    .then(r => {
      this.handleFetch(r)
    })
    .catch(err => {
      this.handleFetch(err)
    })
  }

  handleFetch = (res) => {
    console.log(res)

    this.context.handleSearch(res)
    this.clearSearch()

    if(this.props.history.location.pathname !== '/') {
      this.props.history.push('/')
    }

    this.searchInput.current.blur()
  }
  
  
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.searchInput} type='text' className='search-bar' name='text' placeholder='search subreddits' value={this.state.text} onChange={this.handleChange} />
      </form>
    )
  }
}

export default withRouter(Search);