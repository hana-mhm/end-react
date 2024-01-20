import { Fragment } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GenresComponent from "../../Components/GenresComponent";

export default function Genres(){
    return(
        <Fragment>
            <Header/>
            <GenresComponent genresID="1" title="Dram"/>
            <GenresComponent genresID="2" title="crime"/>
            <GenresComponent genresID="3" title="Action"/>
            <GenresComponent genresID="4" title="Thriller"/>
           <Footer/>
        </Fragment>
    )
}