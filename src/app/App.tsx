import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Footer from "./components/footer";
import Header from "./components/header";
import { useAppSelector } from "./hooks";
import Main from "./pages/main";
import Welcome from "./pages/welcome";
import { repositoriesItems } from "./selectors";

function App() {
	const rows = useAppSelector(repositoriesItems);
	return (
		<Container
			maxWidth={"xl"}
			disableGutters
		>
			<Box
				height={"100vh"}
				display={"flex"}
				flexDirection={"column"}
			>
				<Header />
				{rows.length ? <Main /> : <Welcome />}
				<Footer />
			</Box>
		</Container>
	);
}

export default App;
