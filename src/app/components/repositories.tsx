import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
	GridPaginationModel,
	GridRowSelectionModel,
	GridSortModel,
} from "@mui/x-data-grid";
import { dataGridColumns } from "./data-grid-columns";
import {
	loading,
	paginationModel,
	repositoriesItems,
	rowSelectionModel,
	sortModel,
	totalCount,
} from "../selectors";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
	fetchRepositories,
	setPaginationModel,
	setRowSelectionModel,
	setSortModel,
} from "../repoSlice";
import { useCallback, useEffect, useRef } from "react";
import { StyledDataGrid } from "../styled-components";

export default function Repositories() {
	const skip = useRef(true); // для сброса избыточного запроса при первом рендере
	const dispatch = useAppDispatch();
	const paginationMdl = useAppSelector(paginationModel);
	const sortMdl = useAppSelector(sortModel);
	const rowSelectionMdl = useAppSelector(rowSelectionModel);
	const isLoading = useAppSelector(loading);
	const rowCount = useAppSelector(totalCount);
	const rows = useAppSelector(repositoriesItems);
	const handlePaginationModel = (model: GridPaginationModel) =>
		dispatch(setPaginationModel(model));
	const handleSortModel = useCallback(
		(sortModel: GridSortModel) => {
			dispatch(setSortModel(sortModel));
		},
		[dispatch]
	);
	const handleRowSelectionModel = (
		newRowSelectionModel: GridRowSelectionModel
	) => {
		dispatch(setRowSelectionModel(newRowSelectionModel));
	};

	useEffect(() => {
		if (!skip.current) {
			dispatch(fetchRepositories());
		} else {
			skip.current = false; //сброс избыточного запроса при первом рендере
		}
	}, [dispatch, paginationMdl, sortMdl]);

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			height={"100%"}
			pt={2}
			pr={3}
			pl={4}
			color={"rgba(0, 0, 0, 0.87)"}
		>
			<Typography
				mb={3}
				fontSize={48}
			>
				Результаты поиска
			</Typography>
			<Box
				flex={1}
				position={"relative"}
			>
				<Box
					position={"absolute"} //https://github.com/mui/mui-x/issues/8895
					sx={{ inset: 0 }}
				>
					<StyledDataGrid
						disableColumnMenu
						disableColumnResize
						columns={dataGridColumns}
						rows={rows}
						rowCount={rowCount}
						loading={isLoading}
						paginationMode="server"
						sortingMode="server"
						paginationModel={paginationMdl}
						onPaginationModelChange={handlePaginationModel}
						pageSizeOptions={[5, 10, 50]}
						onSortModelChange={handleSortModel}
						rowSelectionModel={rowSelectionMdl}
						onRowSelectionModelChange={handleRowSelectionModel}
						keepNonExistentRowsSelected
					></StyledDataGrid>
				</Box>
			</Box>
		</Box>
	);
}
