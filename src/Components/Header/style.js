import styled from "styled-components";
import { Pallete } from "../../Them";
import { device } from "../../Them";
export const Style=styled.div`
.header {
    position: relative;
    top: 0;
    left: 0;
    
    .header-inner {
        background-color: transparent;
        background-image: linear-gradient(180deg,#14181c 0,rgba(20,24,28,.945) 16.56%,rgba(20,24,28,.802) 30.85%,rgba(20,24,28,.606) 43.77%,rgba(20,24,28,.394) 56.23%,rgba(20,24,28,.198) 69.15%,rgba(20,24,28,.055) 83.44%,rgba(20,24,28,0));
        background-repeat: repeat-x;
        height: 65px;
        left: 0;
        opacity: 1.7;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
        position: fixed;
      color: #fff;
        .left {
            .logo{
                img{
                    width : 273px;
                    height: auto;
                    margin-left: 110px;
        
                }

            }
        }
    }
    
    

    
}
.header-inner{
    .middle{

    }:hover{
        color: #d8e0e8 ;
    }
    
            
          
      
    
  }        

    
  
  @media only screen and ${device.xl}{
    .header-inner{
        background-color: transparent;
        background-image: linear-gradient(180deg,#14181c 0,rgba(20,24,28,.945) 16.56%,rgba(20,24,28,.802) 30.85%,rgba(20,24,28,.606) 43.77%,rgba(20,24,28,.394) 56.23%,rgba(20,24,28,.198) 69.15%,rgba(20,24,28,.055) 83.44%,rgba(20,24,28,0));
        background-repeat: repeat-x;
        height: 65px;
        left: -72;
        opacity: 1.7;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
        position: fixed;
    }
  }
  
  @media only screen and ${device.lg}{
 .header-inner .left .logo img {
        margin-left: 85px;
    }
    .middle .menu{
        font-size: 17px;
    }
  }   
          
      
   
   
@media only screen and ${device.xs} {
    .header-inner .left .logo img {
        margin-left: 30px;
    }


    .middle .menu {
        font-size: 19px;
    }
} 
       
 
`;