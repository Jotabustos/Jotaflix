import React, { Component } from 'react'
import MovieFeed from './movie/MovieFeed'


class Showcase extends Component {
  render() {
    return (
      <div className="showcase">

        <h1>Showcase</h1>
        <h3>Top Rated</h3>
        <div className="moviecarousel">
          <MovieFeed />
        </div>
        
        {/* <h3>Upcoming</h3>
        <MovieCarousel /> */}
      </div>
    )
  }
}

export default Showcase;