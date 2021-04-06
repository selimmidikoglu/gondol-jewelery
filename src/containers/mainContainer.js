import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import Home2 from "../components/Home/home2"
import Home from "../components/Home/home"
import ThreeThings from "../components/Three/threeThings"
// eslint-disable-next-line no-unused-vars
import Navbar from "../components/Navbar/navbar"
import Panel from "../components/Panel/panel"
import store from "../redux/store"
import { Provider } from "react-redux"
import ThreeBigDesign from "../components/NavBarMain/THREE_BIG_NECKLACE"
export default function MainContainer() {
	return (
		<Provider store={store}>
			<Router >
				<Route exact path="/" default component={Home} />
				<Route path="/three" component={ThreeThings} />
				<Route path="/svgDesign" component={ThreeBigDesign} />
				
				<Route path="/panel">
					<Panel
						multiple={true}
						accept=".png,.jpeg,.jpg"
						label="Profile Images"
					></Panel>
				</Route>
			</Router>
			{/* <div style={{height:'100%',width:'100%'}}>
            <Home/>
            </div> */}
		</Provider>
	)
}