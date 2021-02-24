import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
    display:flex;
    width:100%;
    font-family:"Heebo";
    font-weight:500;
    font-size:20px;
    color:black;
    padding-top:27px;
    justify-content:space-between;
`
export const Logo = styled.span`
    a{
        text-decoration:none;
        color:black;
    }
    
` 
export const NavigationList = styled.ul`
    display:flex;
    list-style:none;
`
export const NavigationElement = styled.li`
    padding-right:25px;
    a{
        text-decoration:none;
        color:black;
    }

`