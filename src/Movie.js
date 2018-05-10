import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

class Movie extends Component{

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
  }

  render(){
    return(
      <div className="Movie">
        <div className="Movie_Column">
          <MoviePoster poster={this.props.poster} alt={this.props.title}/>
        </div>
        <div className="Movie_Column">
          <h1>{this.props.title}</h1>
          <div className="Movie_Genres">
            {this.props.genre.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
          </div>
          <div className="Movie_Synopsis">
            <LinesEllipsis
              text={this.props.synopsis}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
          </div>
        </div>
      </div>
    );
  }
}

class MovieGenres extends Component{

  static proTypes= {
    genre : PropTypes.string.isRequired
  }

  render(){
    return(
      <span className="Movie_Genre">{this.props.genre}</span>
    );
  }
}

class MoviePoster extends Component{

  static propTypes = {
    poster: PropTypes.string.inRequired,
    alt: PropTypes.string.inRequired
  }

  render(){
    return(
      <img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie_Poster"/>
    );
  }
}

export default Movie
