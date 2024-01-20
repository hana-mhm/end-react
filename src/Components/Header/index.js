import { Fragment } from "react";
import { Style } from "./style";
import Button from "../../UiElemets/Button";
export default function Header (){
    return(
        <Style>
            <div className="header">
              
                <div className="container">
                    <div className="header-inner flex align-center gap-60">
                        <div className="left">
                            <div className="logo">
                                <img src="/images/logo-xmas.webp"/>
                            </div>
                        </div>
                        <div className="middel">
                            <div className="menu font-size font-weight">
                               <ul className="flex gap align-center">
                                <li><a href="/">HOME</a></li>
                                <li><a href="#">CREATE ACCOUNT</a></li>
                                <li><a href="/movies">FILMS</a></li>
                                <li><a href="#">LIST</a></li>
                                <li><a href="#">MEMBERS</a></li>
                                <li><a href="/genres">GENRES</a></li>

                                <li>
                                    <Button icon="fa-solid fa-search" className="primary">
                                       <a href="/search">Search</a> 
                                        </Button>
                                  
                                      
                                
                                
                                </li>
                                </ul> 
                            </div>
                        </div>
                          
                    </div>
            </div>   
               

        </div>   
             
        </Style>
    );
}