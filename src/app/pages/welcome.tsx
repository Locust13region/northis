import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Welcome() {
	return (
		<Box
			flexGrow={1}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Typography
				paragraph
				fontSize={"46px"}
				fontWeight={400}
				color={"deepGray.main"}
			>
				Добро пожаловать
			</Typography>
		</Box>
	);
}
