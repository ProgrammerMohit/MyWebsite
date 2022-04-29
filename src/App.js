import './App.css';
import About from './components/about/About';
import { Intro } from './components/intro/Intro';
import ProductList from './components/productLIst/ProductList';
import Contact from './components/contact/Contact'
// import Toggle from './components/toggle/Toggle';
// import { useContext } from 'react';
// import { ThemeContext } from './context';
import React from 'react'
import {useMediaQuery} from 'react-responsive'
import Bar from './components/skills/Skill';

const Example = ()=>{
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const isBigScreen = useMediaQuery({query: '(min-width :1824px)'})
  const isTabletOrMobile = useMediaQuery({query: '(max-width : 1224px)'})
  const isPortrait = useMediaQuery({query: '(orientation :portrait)'})
  const isRetina = useMediaQuery({query: '(min-resolution :2dppx)'})
}

const App = () =>{
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  return <div>
    {/* <Toggle/> */}
    <Intro/>
    <About/>
    <ProductList/>
    <Bar/>
    <Contact/>
  </div>
}

export default App;
