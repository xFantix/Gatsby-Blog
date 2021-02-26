import React from 'react';
import Navigation from '../components/navigation/navigation';
import GlobalStyle from './GlobalStyle/globalStyle';
import Footer from '../components/footer/footer';
const LayoutPage = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Navigation/> 
            {children}
            <Footer/>
        </>
     );
}
 
export default LayoutPage;