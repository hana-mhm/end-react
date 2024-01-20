import { Style } from "./Style"
import { api } from "../../Utills/api";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../../Components/Pagination";
import MainLayout from "../../Components/MainLayout";


export default function Movies(){
    const [data , setData ] = useState({
        data: [],
        metadata: {
            current_page: 1,
            per_page: 2,
            page_count: 25,
            total_count: 250,
            }


});
    useEffect(function(){
        getApi();
    },[])

        function getApi(page = 1){
            api.get(`/movies?page=${page}`)
            .then(function(res){
              setData(res.data);
            })
            .catch(function(error){
        
            });
        
         
        }
    function renderFarm (){
        return data.data.map ((item)=>{
            const {id , poster, title} = item;
            return(
                <li key={id}>
                    <img src={poster}/>
                    <h3>{title}</h3>
                </li>
            )
        })
    }
    function handlePageClick(e){
      getApi(e.selected + 1);
    }

    return(

    <MainLayout>
        <Style className="movies">
            <div className="container">
        
                <div className="list">
                 
            <ul>
          
                {renderFarm()}
            </ul>
            <Pagination
            onPageChange={handlePageClick}
            itemPerPage={10}
            pageCount={data.metadata.page_count}
                
            />
            </div>
            </div>
        </Style>
        </MainLayout>
      
    )
}