import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
    display:flex;
    width:100%;
    font-family:"Heebo";
    font-weight:500;
    font-size:20px;
    color:black;
    padding:27px 60px 0px 60px;
    justify-content:space-between;
`
export const Logo = styled.span`
    a{
        text-decoration:none;
        color:black;
        @media(max-width:570px){
            padding-left:20px;
        }
    }  
` 
export const NavigationList = styled.ul`
    display:flex;
    list-style:none;
    @media(max-width:570px){
      display:none;
    }
`
export const NavigationElement = styled.li`
    padding-right:25px;
    a{
        text-decoration:none;
        color:black;
    }

`