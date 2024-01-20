import styled from "styled-components";
import { Pallete } from "../../Them";

export const Style=styled.a`
    border-radius: ${Pallete.border};
    padding: 7px 30px;
    display: inline-block;
    color: ${Pallete.color};

&.primary {
    background-color:${Pallete.primary}
   
}
.with-icon {
    display: flex;
    gap: 3px;
    align-items: center;
}
`;