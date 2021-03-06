import React, { Component, Suspense, lazy } from 'react';
import { StoreConsumer } from '../../contexts';
import ErrorMsg from '../ErrorMsg';

const Tile = lazy(() => import('./Tile'))


class TileContainer extends Component {

  static contextType = StoreConsumer;

  state = {
    data: null,
  }

  renderTiles = () => {
    return this.state.data.map(tile => {

      let favs = localStorage.getItem('favs')

      if (favs) {
        favs = JSON.parse(favs)

        const fav = favs.filter(el => el.id === tile.id)

        if (fav.length) {
          return <Tile key={tile.id} tile={tile} fav={true} />
        }
      }

      return <Tile key={tile.id} tile={tile} fav={false} />
    })
  }

  render() {
    return (

      <StoreConsumer>
        { ctx => {
          
          if(ctx.data !== this.state.data) {
            this.setState({
                data: ctx.data
            }, () => console.log(`updated state`))
          }

          return (

            <main className='tile-area'>
              <Suspense delayMs={1000} fallback={<div>Loading...</div>}>

                { ctx.searchError ? <ErrorMsg msg={`Unfortunately such a subreddit can't be found`} /> : null }

                { this.state.data ? this.renderTiles() : null }

              </Suspense>
            </main>

          )}
        }
      </StoreConsumer>
    )
  }
}

export default TileContainer;