/* eslint-disable react/jsx-props-no-spreading */
// @flow
/* -----------------------  Globals ------------------ */
import React from 'react';

/* -----------------------  Next ------------------ */
import Head from 'next/head';

/* -----------------------  Material UI ------------------ */
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

/* -----------------------  Child Components ------------------ */
import theme from '../src/theme';
import './global-styles.css';

/* -----------------------  Types ------------------ */
type Props = {
  Component: *,
  pageProps: *,
}

/* -----------------------  Component ------------------ */
export default function MyApp(props: Props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
