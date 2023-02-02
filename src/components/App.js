import NavBar from "./navbar/NavBar"
import SignUp from "./signup/SignUp"
import AboutUs from "./aboutus/AboutUs"
import Home from "./home/Home"
import { Route, Switch } from "react-router-dom"
import LogIn from "./login/LogIn"
export default function App() {
    return (
      <>
      <NavBar/> 
      <Switch>
      <Route exact path="/"><Home/></Route>
        <Route path="/SignUp"><SignUp/></Route>
        <Route path="/LogIn"><LogIn/></Route>
        <Route path="/AboutUs"><AboutUs/></Route>
        </Switch>  
      </>   
    )
}