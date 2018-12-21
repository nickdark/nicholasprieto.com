import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider as RebassProvider } from 'rebass';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import theme from '../theme';
import Helmet from './Helmet';
import Header from './Header';
import Footer from './Footer';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-131206149-1');
    ReactGA.pageview('/');
}

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Lobster;
}
`;

config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <RebassProvider theme={theme}>
      <ScrollingProvider>
        <Helmet />
        <Header />
        {children}
        <Footer />
      </ScrollingProvider>
    </RebassProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
