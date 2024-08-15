import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PaginationModel, RepoState } from "./types";
import { languagesRequest, repositoriesRequest } from "./services";
import { GridRowSelectionModel, GridSortModel } from "@mui/x-data-grid";

export const fetchRepositories = createAsyncThunk(
	"repositories/fetchRepositories",
	async (_, { getState, rejectWithValue }) => {
		const { repoState } = getState() as RootState;
		const { searchRequest } = repoState;
		const { sort, field } = repoState.sortModel[0];
		const { pageSize, page } = repoState.paginationModel;
		try {
			const result = await repositoriesRequest({
				searchRequest,
				pageSize,
				page,
				field,
				sort,
			});
			return result;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue("fetch error");
			}
			return rejectWithValue("unexpected error");
		}
	}
);
export const fetchRepositoryLanguages = createAsyncThunk(
	"repositories/fetchRepositoryLanguages",
	async (_, { getState, rejectWithValue }) => {
		const { repoState } = getState() as RootState;
		const { languages_url } = repoState.repoDescription;
		try {
			const result = await languagesRequest(languages_url);
			return result;
		} catch (error) {
			if (error instanceof Error) {
				return rejectWithValue("fetch error");
			}
			return rejectWithValue("unexpected error");
		}
	}
);

const initialState: RepoState = {
	repositories: {
		total_count: 0,
		items: [],
	},
	repoDescription: {
		name: "",
		language: "",
		languages_url: "",
		stargazers_count: 0,
		license: null,
	},
	repoLanguages: [],
	loading: false,
	searchRequest: "cocktailsdb",
	sortModel: [
		{
			field: "forks",
			sort: "desc",
		},
	],
	paginationModel: {
		page: 0,
		pageSize: 50,
	},
	rowSelectionModel: [],
};

export const RepoSlice = createSlice({
	name: "repositories",
	initialState,
	reducers: {
		setSearchRequest: (state, action: PayloadAction<string>) => {
			state.searchRequest = action.payload;
			if (action.payload === "") {
				state.repositories.total_count = 0;
				state.repositories.items = [];
			}
		},
		setPaginationModel: (state, action: PayloadAction<PaginationModel>) => {
			state.paginationModel = action.payload;
		},
		setSortModel: (state, action: PayloadAction<GridSortModel>) => {
			state.sortModel = action.payload;
		},
		setRowSelectionModel: (
			state,
			action: PayloadAction<GridRowSelectionModel>
		) => {
			if (state.rowSelectionModel !== action.payload) {
				state.rowSelectionModel = [...action.payload];
				state.repoDescription = state.repositories.items.find(
					(item) => item.id === action.payload[0]
				)!;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepositories.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchRepositories.fulfilled, (state, action) => {
				state.loading = false;
				state.repositories = action.payload;
			})
			.addCase(fetchRepositories.rejected, (state) => {
				state.loading = false;
			})
			.addCase(fetchRepositoryLanguages.fulfilled, (state, action) => {
				state.repoLanguages = action.payload;
			});
	},
});

export const {
	setSearchRequest,
	setPaginationModel,
	setSortModel,
	setRowSelectionModel,
} = RepoSlice.actions;

export default RepoSlice.reducer;
