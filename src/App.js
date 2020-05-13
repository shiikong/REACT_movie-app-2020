import React from "react";
// import PropTypes from "prop-types";
import Axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //비동기(기다려!)
    const {
      data: {
        data: { movies },
      },
    } = await Axios.get(
      //뭘기다려? Axios!
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    // this.setState({ movies: movies }); 아래와 같이
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <ul className="movies">
            {movies.map((movie, index) => (
              <Movie
                key={index}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default App;
