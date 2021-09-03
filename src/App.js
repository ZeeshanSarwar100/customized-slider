import logo from "./logo.svg";
import Slider from "./lib/components/slider";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import './style.scss'

const data = [
  { img: "", name: "Dashboard", url: "/dashboard" },
  { img: "", name: "Document", url: "/document" },
  { img: "", name: "Service availibility", url: "service" },
];

const isLoggedIn = true;

const App = () =>  {
  const [isCollapseOpen , setIsCollapseOpen] = useState(true)


  const isCollapseOpenToggle = () => {
    setIsCollapseOpen(!isCollapseOpen)

  }


  console.log("collapse state in app.js" , isCollapseOpen)
  return (
    <div style = {{ display : 'inline-flex' , width : '100%'}}>
      <div className = {`${isCollapseOpen ? "w20" : "w5"}`}>
        <Slider data={data} isLoggenIn={isLoggedIn} callBackIsCollapseToggle = {() => isCollapseOpenToggle()} />
      </div>  
      <div className = {`${isCollapseOpen ? "w80" : "w95"}`} style = {{ background : 'red' , boxSizing :'border-box' , display : 'flex' , justifyContent : 'center' , alignItems : "center"}}>My app</div>
    </div>
  );
}

export default App;
