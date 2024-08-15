import Grid from "@mui/material/Grid";
import Description from "../components/description";
import RepositoriesList from "../components/repositories";

export default function Main() {
	return (
		<Grid
			container
			height={"100%"}
			// overflow={"hidden"}
		>
			<Grid
				item
				md={8}
			>
				<RepositoriesList />
			</Grid>
			<Grid
				item
				md={4}
			>
				<Description />
			</Grid>
		</Grid>
	);
}
