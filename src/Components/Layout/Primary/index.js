import { Children, Fragment } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import HeaderPoster from "../../HeaderPoster";

export default function PrimaryLayout(props){
    return(
        <Fragment>
        <Header/>
        <HeaderPoster/>
        {props.children}
        
        <Footer/>
        </Fragment>
    );
}