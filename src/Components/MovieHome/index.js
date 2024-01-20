import { useEffect, useState } from "react";
import { Style } from "./style";
 import { api } from "../../Utills/api"; 
import { Link } from "react-router-dom";


export default function MovieHome(props){
    const { title = "" , url = "" } = props;
    const [ movies , setMovies ] = useState([]);
    const [ loading , setLoading] = useState(false);
    useEffect(function(){
        setLoading(true);
      api
      .get(url)
      .then(function(response){
        setMovies(response.data.data);
        setLoading(false);
      })
      .catch(function(error){
        setLoading(false);
      });

    },[]);
  function renderFarm(){
    return movies.map((movie) => {
        const {id ,title, poster , year ,country} = movie;
        return (
            <li className="list-movie" key={id}>
              <Link to={`/item/${id}`}>
               
              <div className="card">
                 <img className="hover-image" src={poster}/>
                
                    <div className="overlay">
                      <i className="fa-solid fa-eye i-color2"></i>
                  <h2 className="hover-year">{year}</h2>
                  <i className="fa-solid fa-heart i-color "></i>
                   <h4 className="h-hover">{country}</h4>
                  </div>

                    <h3 className="hover-title">{title}</h3>
                    
                </div>
                </Link>
            </li>
        );
    });
  }
    return (
        <Style className="movie-home">
            <div className="container">
              <h2 className="s-title">{title}</h2>
           {loading ? "loading"
          : <ul className="class flex flex-wrap justify"
>            {renderFarm()}
           </ul>}
           
           </div>
           
        </Style>
    );
}