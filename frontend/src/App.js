import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/redux";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import "./assets/app.sass";

const COLORS = {
	primary: "#ec1e64",
	secondary: "#0ca1eb",
	white: "#ffffff",
};

const App = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
			background: {
				default: COLORS.primary,
			},
			primary: {
				main: COLORS.primary,
				contrastText: COLORS.white,
			},
			secondary: { main: COLORS.secondary },
		},
	});
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<AppRouter />
				</ThemeProvider>
			</Provider>

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				limit={8}
				theme="dark"
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default App;
