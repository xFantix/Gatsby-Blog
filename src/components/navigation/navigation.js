import React from 'react';
import {NavigationWrapper,Logo,NavigationList,NavigationElement} from  './navigationStyle';
import {Link} from 'gatsby';

const Navigation = () => {
    return ( 
       <NavigationWrapper>
            <Logo>
                <Link to="/">
                     FrontBlog
                </Link>
            </Logo>
           
          <NavigationList>
              <NavigationElement>
                  <Link to="/works">Works</Link>
              </NavigationElement>
              <NavigationElement>
                  <Link to="/blog">Blog</Link>
              </NavigationElement>
              <NavigationElement>
                  <Link to="/contact">Contact</Link>
              </NavigationElement>
          </NavigationList>
       </NavigationWrapper>
     );
}
 
export default Navigation;