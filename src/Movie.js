import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <li className="movie">
      <h4 className="movie__title">
        {title} ({year})
      </h4>
      <div className="movie__data">
        <img className="movie__poster" src={poster} alt={title} />
        <p className="movie__summary">{summary}</p>
        <p className="genres">
          {genres.map((genres) => (
            <li className="movie__genres"></li>
          ))}
        </p>
      </div>
    </li>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
