import { Link, useParams } from "react-router-dom";
import { Style } from "./style";    
import { Children, useEffect, useState } from "react";
import { api } from "../../Utills/api";
import MovieHome from "../../Components/MovieHome";
import MainLayout from "../../Components/MainLayout";
import Popular from "../../Components/Popular";
import ContentSingle from "../../Components/ContentSingle";





export default function SingleMovie(){
    const { id } = useParams();
    const [data , setData] = useState({});
    useEffect(function(){
    api.get(`/movies/${id}`)
    .then(function(res){
      setData(res.data);
    })
    .catch(function(error){

    });

    },[])
return (
  
    <MainLayout>
  <Style>
      
        
  <div className="container">
        <div className="hero">
    <div className="fix">
        <img src={data.poster}/>
    
     <div className="sample">
        <h1>{data.title}</h1>
        <h2>{data.year}</h2>
        <h2>director by:{data.director}</h2>
        <h3>{data.plot}</h3>
       <h4>{data.actors}</h4>
       <h5>{data.country},{data.runtime},{data.imdb_rating},{data.genres}</h5>
      
       </div>
       </div>
       
       </div>
       
       </div>
      
     </Style>
     <MovieHome title="SIMILAR FILMS" url="movies?page=2" />
     <ContentSingle/>
     <Popular/>
      </MainLayout>

  
  
);

}    