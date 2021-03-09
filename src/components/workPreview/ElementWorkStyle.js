import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:flex;
  border-bottom:1px solid #E0E0E0;
  padding-bottom:15px;
  margin-top:30px;
  @media(max-width:660px){
        flex-direction:column;
    }
`
export const DescriptionContainer = styled.div`
   font-family:"Heebo";
   color: #21243D;
   padding-left:20px;
   @media(max-width:660px){
        padding-top:20px;
    }
`
export const Header = styled.h2`
  font-weight:700;
  font-size:30px;
`
export const Paragrpah = styled.p`
  font-weight:400;
  font-size:16px;
`