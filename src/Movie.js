import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <ul>
      <li>
        <h4>
          {title} ({year})
        </h4>
        <div>
          <p>
            <img src={poster} alt={title} />
          </p>
          <p>{summary}</p>
        </div>
      </li>
    </ul>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
export default Movie;
