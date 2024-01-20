import { api } from "../../Utills/api";
import { Style } from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useEffect, useState,useRef} from "react";
import { useSearchParams,createSearchParams } from "react-router-dom";


export default function Search(){
    const input= useRef(null);
    const [serachParams, setSearchParams] = useSearchParams();
    console.log(serachParams.get("q"));

    const [data , setData] = useState ({
        data: [],
        matadata:  {
            current_page: 1,
            per_page: 10,
            page_count: 1,
            total_count: 1,
        },
    });
    
    useEffect(function(){
        console.log(input.current.focus());
    },[])
    function getApi(search){
        api
        .get("movies", { params: { q: search }})
        .then(function (res) {
          setData(res.data);
        })
        .catch(function(error){});
       } 
  
    function typing(event) {
       getApi(event.target.value);
       setSearchParams(createSearchParams({q:event.target.value}))
       }
    function renderFarm(){
        if (serachParams.get("q")){
            if (data.data.length === 0) {
                return "not found movie!"
            }
           
        }
        return data.data.map(({id , title, poster})=>{
            return(
                <li key={id}>
                  <h2>{title}</h2>
                  <img src={poster}/>
                </li>
            );
        });
    }
    return(
      <Style>
        <Header/>
        <div className="container">
            <div className="content">
        <input
        ref={input}
        value={serachParams.get("q") ? serachParams.get("q") : ""}
        onChange={typing} type="text" placeholder="type somthing..."/>
        </div>
        </div>
        <ul className="container">{renderFarm()}</ul>
        <Footer/>
      </Style>

       
    )
}