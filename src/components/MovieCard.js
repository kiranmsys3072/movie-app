import React from "react";


class MovieCard extends React.Component{
   
render(){

    const {movie}=this.props
    return <div className="movie-card">
        <div className="left">
            <img className="img" src={movie.Poster}/>
            {console.log(movie.Poster)}

        </div>
        <div className="right">
           <div className="title`">{movie.Title}</div>
           <div className="plot">{movie.plot}</div>
           <div className="footer">
            <div className="rating">{movie.Imdb}</div>
            <button className="favourite-btn">fav</button>
           </div>
          
        </div>
    </div>
}



}


export default MovieCard;
