import { createGlobalStyle } from "styled-components";


 export const Globalstyle = createGlobalStyle `
body {
    direction: ltr;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Sora', sans-serif;
    background: #14181c;

}

.container {
 width: 1200px;
margin: 0 auto;

}
  

ul , ol {
   padding: 0;
   list-style: none;
   margin: 0;

}
*,*:after, *:before {
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: #fff;
    
}
.flex {
    display: flex;
}
.space-between{
    justify-content: space-between;
}
.flex-wrap {
    flex-wrap: wrap;
}
 
.gap-25{
    gap: 25px;

}
gap-5 {
    gap:5px;
}
.gap {
    gap: 20px;
}
.gap-50 {
    gap: 50px;
}
.gap-60 {
    gap: 90px;
}
.justify {
    justify-content: center; 
}
.align-center{
    align-items: center;
}
.font-size {
    font-size: 15px;
}
.font-weight {
    font-weight: bold;
}
.s-content{
    
background-color: #345;
padding: 12px 10px;





}
.width-single{
    
        width: 188px;
        height: 106px;
    
}
.p-content{
    font-size: 14px;
    width: 196px;
    color: #9ab;
}
a:hover .panel-1{
    color:#00c030;
}
    
 
a.panel-2{

}:hover{
    color:#ee700;
}      
`;