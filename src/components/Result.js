import React from 'react';
import PropTypes from 'prop-types'
import '../styles/Result.scss';


const Result = ({ movie }) => {
  // To Do: Fetch bigger movie posters for larger screen widths
  const imageUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
  const ratingStars = [];
  const rating = Math.floor(movie.vote_average);

  for (let i = 1; i < 11; i++) {
    ratingStars.push(<span key={i} className={`fa fa-star ${i <= rating ? 'checked' : ''}`} />)
  }

  return (
    <div className="result-card-container">
      <div className="result-card">
        <div className="card-front">
          <div className="poster" style={{ backgroundImage: `url(${imageUrl})` }} />
          <span className="info-icon fa fa-info-circle" />
        </div>
        <div className="card-back">
          <div className="info">
            <div className="title">{movie.title}</div>
            <div className="release">{movie.release_date}</div>
            <div className="rating">{ratingStars}</div>
            <div className="number-reviewers">Based on {movie.vote_count} {`Review${movie.vote_count !== 1 ? 's' : ''}`}</div>
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  movie: PropTypes.object
}

export default Result;
