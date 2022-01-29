import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path={`/`}>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
