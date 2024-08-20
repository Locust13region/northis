import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Welcome() {
	return (
		<Box
			flexGrow={1}
			display={"flex"}
			flexDirection={"column"}
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
			<Typography
				width={0.5}
				paragraph
				fontSize={"16px"}
				fontWeight={400}
				color={"deepGray.main"}
			>
				в Web-приложение для поиска репозиториев GitHub с помощью GitHub REST
				API. Результаты поиска представлены в виде таблицы со следующими
				столбцами: название, язык, число форков, число звёзд, дата обновления.
			</Typography>
			<Typography
				width={0.5}
				paragraph
				fontSize={"16px"}
				fontWeight={400}
				color={"deepGray.main"}
			>
				В таблице реализована пагинация и сортировка с возможностью выбора
				направления по следующим столбцам: число звёзд, число форков, дата
				обновления. По выбору строки таблицы отображаются детали: название,
				описание, лицензия.
			</Typography>
		</Box>
	);
}
