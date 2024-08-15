import type { RootState } from "./store";

export const searchRequest = (state: RootState) =>
	state.repoState.searchRequest;
export const loading = (state: RootState) => state.repoState.loading;
export const totalCount = (state: RootState) =>
	state.repoState.repositories.total_count;
export const repositoriesItems = (state: RootState) =>
	state.repoState.repositories.items;
export const repoDescription = (state: RootState) =>
	state.repoState.repoDescription;
export const paginationModel = (state: RootState) =>
	state.repoState.paginationModel;
export const sortModel = (state: RootState) => state.repoState.sortModel;
export const rowSelectionModel = (state: RootState) =>
	state.repoState.rowSelectionModel;
export const repoLanguages = (state: RootState) =>
	state.repoState.repoLanguages;
