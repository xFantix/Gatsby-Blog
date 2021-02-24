import React from 'react';
import Navigation from '../components/navigation/navigation';
import GlobalStyle from './GlobalStyle/globalStyle';
const LayoutPage = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Navigation/> 
            {children}
        </>
     );
}
 
export default LayoutPage;