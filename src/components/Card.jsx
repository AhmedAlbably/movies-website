import "./card.css";

function Card({ movie }) {
  return (
    <div className="card">
      <div className="poster">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="no-poster"></div>
        )}
      </div>

      <div className="content">
        <h3 className="title">{movie.Title}</h3>
        {movie.Year ? <div className="year">{movie.Year}</div> : null}
      </div>

      <div className="control">
        <button className="add-to-watch-list"> Watch List</button>
        <button className="watched-btn">Watched</button>
      </div>
    </div>
  );
}

export default Card;
