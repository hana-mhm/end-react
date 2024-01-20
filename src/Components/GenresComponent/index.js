import { useEffect } from "react";

import { Style } from "./style";
import { useState } from "react";
import { api } from "../../Utills/api";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";





export default function GenresComponent(props){
const {genresID , title} = props;
const [loading , setLoading] = useState(false);
  const [data,setData] = useState({
    data: [],
    metadata: {
        current_page: 1,
        per_page: 2,
        page_count: 25,
        total_count: 250,
        }


});
 
  
  useEffect(function(){
    setLoading(true) 
    api.get(`/genres/${genresID}/movies`)
    .then(function(response){
        setData(response.data);
        setLoading(false);

    })
      .catch(function(error){
        setLoading(false);
      })
},[]);

function renderFarm (){
    return data.data.map ((item)=>{
        const {id , poster, title} = item;
        return(
            <li key={id}>
                <img className="genre-image" src={poster}/>
                <h3 className="genre-title">{title}</h3>
                </li>
            )
        })
    }  
           
 useEffect(function(){
    getApi();
},[])

    function getApi(page = 1){
        api.get(`/genres/${genresID}/movies?page=${page}`)
        .then(function(res){
          setData(res.data);
        })
        .catch(function(error){
    
        });
    
     
    }

      
         
   
function handlePageClick(e){
  getApi(e.selected + 1);
}

return(
    <Style>
        <div className="container">
        
        <h2 className="main-title">{title}</h2> 
        {loading ===true ? <div>loading...</div> :
    <ul className="genre">
        
        {renderFarm()}
    </ul>
    }
      <Pagination
            onPageChange={handlePageClick}
            itemPerPage={10}
            pageCount={data.metadata.page_count}
                
            />
    </div>
    
    </Style> 
);
}
    
         