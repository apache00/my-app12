
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';

import { useEffect } from "react";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    
  },[])
  return <Component {...pageProps} />
}

export default MyApp
