import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { StyledSearchInput } from "../styled-components";
import { searchRequest } from "../selectors";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchRepositories, setSearchRequest } from "../repoSlice";

export default function Header() {
	const dispatch = useAppDispatch();
	const searchString = useAppSelector(searchRequest);
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setSearchRequest(event.target.value));
	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch(fetchRepositories());
	};

	return (
		<AppBar
			position={"static"}
			elevation={0}
			color={"headerBg"}
		>
			<Toolbar>
				<StyledSearchInput
					name="search-field"
					autoFocus
					placeholder={"Введите поисковый запрос"}
					inputProps={{ "aria-label": "search" }}
					onChange={handleInput}
					value={searchString}
				/>
				<Button
					size={"large"}
					variant={"contained"}
					type={"submit"}
					onClick={handleSubmit}
				>
					ИСКАТЬ
				</Button>
			</Toolbar>
		</AppBar>
	);
}
