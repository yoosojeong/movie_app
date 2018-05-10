import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentwillReceiveProps() ->  ShouldComponentUpdate() -> ComponentWillUpdata() -> render() -> ComponentDidUpdate()

  constructor(props) {
    super(props);
    this.state = {movies: []};
  }
  

  componentDidMount(){
    this._getMovies();
  }

_renderMovies() {
  return this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie
       title={movie.title_english}
       poster={movie.medium_cover_image}
       key={movie.id}
       genre={movie.genres}
       synopsis={movie.synopsis}
    />
  })
  // return movies
}

_getMovies() {
  fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => {
      this.setState({movies: json.data.movies});
    })
    .catch(err => console.log(err));
}

render() {
    const { movies } = this.state;
    const moviesLength = movies;
    return (
      <div className={moviesLength ? "App" : "App--loading"}>
        {moviesLength ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
