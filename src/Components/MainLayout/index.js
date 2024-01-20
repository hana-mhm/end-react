import Footer from "../Footer";
import { Fragment } from "react";
import Header from "../Header";
import HeroMovie from "../HeroMovie";
import Genres from "../../Pages/Genres";


export default function MainLayout (props){
    return(
        <Fragment>
        <Header/>       
      <HeroMovie/>
      {props.children}
    
        <Footer/>
        </Fragment>
    );
}