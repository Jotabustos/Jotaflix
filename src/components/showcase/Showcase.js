import React, { Component } from 'react'
import MovieCarousel from './movie/MovieCarousel'


class Showcase extends Component {
  render() {
    return (
      <div className="showcase">
        <div className="container-fluid">
        <div className="row">
        <div className="col">
        <h1>Showcase</h1>
        <h3>Top Rated</h3>
        <MovieCarousel />
        {/* <h3>Upcoming</h3>
        <MovieCarousel /> */}
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Showcase;