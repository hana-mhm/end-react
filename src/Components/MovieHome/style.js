import styled from "styled-components";
import { device } from "../../Them";

export const Style=styled.div`
ul {
    gap:10px;
  
 
}


    img{
        width: 163px;
        border: 1px solid #cde;
    }


    

 h3 {
            width: 150px;
            font-size: 12px;
            color: #9ab;
      }
    
      
.s-title{
    border-bottom: 1px solid #456;
    color: #9ab;
    width: 1020px;
    font-weight: bold;
    font-size: 15px;
    margin-left: 88px;
    margin-top: 62px;
    margin-bottom: 12px;
}:hover{
    color:#fff;
}







.hover-year{
    font-size: 15px;
    color: #fff;
}
.hover-genres{
    font-size: 12px;
   color: #fff;
}
.i-color{
    color:#ee7000;
    font-size:23px;
}
.i-color2{
    color:#00c030;
    font-size:23px;
} 
.h-hover{
    font-size: 13px;
}

.card{
 position: relative;
}
   



.overlay{
    position: absolute;
    height: 195px;
    width: 94px;
    top: 27px;
    left: 33px;
    border: 1px solid #678;
    border-radius: 3px;
    padding: 10px 25px;
    opacity:0;
    display: inline-block;
    background-color: rgba(0,0,0,0.6);
    
}
.card:hover .overlay{
    opacity:  1;

}


 

    

 @media only screen and ${device.md}{
    ul{
        width: 1000px;
    }
    .s-title {
        width: 854px;
        margin-left: 78px;
    }
    
 }


`;