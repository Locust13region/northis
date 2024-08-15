import { GridSortDirection } from "@mui/x-data-grid";
import type { Repositories } from "./types";

const baseUrl = "https://api.github.com/search/repositories";
const requestHeaders = { accept: "application/vnd.github+json" };
interface repositoriesRequestProps {
	searchRequest: string;
	pageSize: number;
	page: number;
	field: string;
	sort: GridSortDirection;
}

//преобразование поля к воспринимаемому поисковым запросом виду
function fieldNameConverter(fieldName: string): string {
	switch (fieldName) {
		case "updated_at":
			return "updated";
		case "stargazers_count":
			return "stars";
		default:
			return fieldName;
	}
}

export const repositoriesRequest = async ({
	searchRequest,
	pageSize,
	page,
	field,
	sort,
}: repositoriesRequestProps): Promise<Repositories> => {
	const repositoriesUrl = `${baseUrl}?q=${searchRequest}+in:name&sort=${fieldNameConverter(
		field
	)}&order=${sort}&per_page=${pageSize}&page=${page + 1}`;
	const response = await fetch(repositoriesUrl, { headers: requestHeaders });
	if (!response.ok) {
		throw new Error("wrong response");
	}
	return await response.json();
};
export const languagesRequest = async (url: string): Promise<string[]> => {
	const response = await fetch(url, { headers: requestHeaders });
	if (!response.ok) {
		throw new Error("wrong response");
	}
	const result = await response.json();
	return Object.keys(result);
};
