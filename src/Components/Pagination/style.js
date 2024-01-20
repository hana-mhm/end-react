import styled from "styled-components";

export const Style=styled.div`
ul {
     display: flex;
     justify-content: center;
     margin: 60px 20px;

    li{
        a{
           display: block;
          
           padding-left: 8px;
           padding-right: 8px;
           padding-top: 4px;
           color:#000;
    }
    &.selected{
        a{
            background: #fbbc04;
        }
    }

}



`;