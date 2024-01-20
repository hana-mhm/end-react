
import Content from "../../Components/Content";
import EndContent from "../../Components/EndContent";
import HeaderPoster from "../../Components/HeaderPoster";
import PrimaryLayout from "../../Components/Layout/Primary";
import MovieHome from "../../Components/MovieHome";
import Popular from "../../Components/Popular";
import EndMenu from "../../EndMenu";








 
    


export default function HomePage(){
    return  (
    <PrimaryLayout>
   
      <MovieHome  url="movies" />
      <MovieHome  url="movies?page=2" />
      <Content/>
      <MovieHome title="JUST REVIEWED..." url="movies?page=3"/>
     
      <EndContent/>
      <Popular/>
      <EndMenu/>
    </PrimaryLayout>
    
    
    );
    
    
}