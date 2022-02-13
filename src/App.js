import './App.css';
import About from './components/about/About';
import { Intro } from './components/intro/Intro';
import ProductList from './components/productLIst/ProductList';
import Contact from './components/contact/Contact'
// import Toggle from './components/toggle/Toggle';
// import { useContext } from 'react';
// import { ThemeContext } from './context';
import Bar from './components/skills/Skill';
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
