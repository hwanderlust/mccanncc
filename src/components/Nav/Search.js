import React from 'react';
import { StoreConsumer } from '../../contexts';

class Search extends React.PureComponent {

  static contextType = StoreConsumer;

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.text)

    const url = `https://www.reddit.com/subreddits/search.json?q=${this.state.text}`
    const options = {
      method: 'GET'
    }

    fetch(url, options)
    .then(r => r.json())
    .then(r => {
      console.log(`raw`, r)
      this.context.handleSearch(r)
    })
    .catch(err => console.log(err))
  }
  
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' className='search-bar' name='text' placeholder='search subreddits' value={this.state.text} onChange={this.handleChange} />
      </form>
    )
  }
}

export default Search