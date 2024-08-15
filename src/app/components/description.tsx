import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
	repoDescription,
	repoLanguages,
	rowSelectionModel,
} from "../selectors";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { useEffect } from "react";
import { fetchRepositoryLanguages } from "../repoSlice";

export default function Description() {
	const dispatch = useAppDispatch();
	const selectedRepoId = useAppSelector(rowSelectionModel);
	const repoInfo = useAppSelector(repoDescription);
	const languagesList = useAppSelector(repoLanguages);

	useEffect(() => {
		if (repoInfo.languages_url) {
			dispatch(fetchRepositoryLanguages());
		}
	}, [dispatch, repoInfo.languages_url]);

	return (
		<Box
			height={"100%"}
			bgcolor={"lightGray.main"}
		>
			{!selectedRepoId.length ? (
				<Box
					height={"100%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Typography
						fontSize={14}
						color={"deepGray.main"}
					>
						Выберите репозиторий
					</Typography>
				</Box>
			) : (
				<Box
					pt={3}
					pr={4}
					pl={3}
					color={"rgba(0, 0, 0, 0.87)"}
				>
					<Typography
						mb={2}
						fontSize={32}
					>
						{repoInfo.name}
					</Typography>
					<Stack
						mb={2}
						direction="row"
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Chip
							label={repoInfo.language}
							color={"primary"}
						/>
						<Stack
							direction={"row"}
							alignItems={"flex-start"}
							spacing={1}
						>
							<Rating
								name="repository-rating"
								max={1}
								size="medium"
								defaultValue={1}
								readOnly
							/>
							<Typography
								component={"legend"}
								fontSize={14}
							>
								{repoInfo.score}
							</Typography>
						</Stack>
					</Stack>
					<Stack
						mb={3}
						direction="row"
						spacing={1}
						useFlexGap
						fontSize={13}
						flexWrap={"wrap"}
					>
						{languagesList.map((item, index) => (
							<Chip
								key={index}
								label={item}
								size={"small"}
							/>
						))}
					</Stack>
					<Typography fontSize={14}>{repoInfo.license}</Typography>
				</Box>
			)}
		</Box>
	);
}
