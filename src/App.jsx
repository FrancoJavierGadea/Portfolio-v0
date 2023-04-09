import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation"
import Projects from "./components/Projects"
import ThemeSwitch from "./components/ThemeSwitch";
import useTheme from "./hooks/useTheme";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Background from "./components/Background";



function App() {

	const {theme, changeTheme} = useTheme();


	return (<div className="App " style={{}}>

		<ThemeProvider theme={theme}>
			<Background>

				<Navigation>
					<ThemeSwitch theme={theme} onChange={changeTheme} />
				</Navigation>

				<Home />

				<Projects />

				<Footer />

			</Background>
		</ThemeProvider>

	</div>)
}

export default App
