import styled from "styled-components";
import { device } from "../../Them";
export const Style = styled.div`
.class{
    display: flex;
     gap:5px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}
.icon{
    float: left;
    height: 33px;
    margin: 0;
    position: relative;
    top: 5px;
    width: 50px; 
}
 .panel {
    border: none;
    border-radius: 3px;
    color: #fff;
   
    display: block;
    margin-bottom: 3px;
    width: 310px;
}:hover.-hover-green{
    background-color: #00c030;
}:hover.-hover-orange{
    background-color: #ee7000;
}:hover.-hover-blue{
    background-color: #209ce4;
}
}

.pronomel{
    background: #456;
    padding: 16px 20px 18px;

}


  a{
    p{
        color: #def;
        margin: 0 0 0 50px;
        padding-top: 5px;
        font-size: 14px;
        line-height: 1.5;
        
       
    }
  } 

  

 
      
.font{
    
        font-size: 24px;
    
}


@media only screen and ${device.sm}{
    .class {
        display: flex;
        gap: 20px;
        width: 789px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
         
        
     }

`;