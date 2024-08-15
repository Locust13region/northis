import { GridRowSelectionModel, GridSortModel } from "@mui/x-data-grid";

export interface RepoState {
	repositories: Repositories;
	repoDescription: RepoDescription;
	repoLanguages: string[];
	loading: boolean;
	searchRequest: string;
	sortModel: GridSortModel;
	paginationModel: PaginationModel;
	rowSelectionModel: GridRowSelectionModel;
}
export interface Repositories {
	total_count: number;
	items: RepoItems[];
}
export interface RepoDescription {
	name: string;
	language: string;
	languages_url: string;
	score: number;
	license: string | null;
}
export interface RepoItems extends RepoDescription {
	id: number;
	forks: number;
	updated_at: Date;
}

export interface PaginationModel {
	pageSize: number;
	page: number;
}
