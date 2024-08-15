import { GridColDef } from "@mui/x-data-grid";

export const dataGridColumns: GridColDef[] = [
	{
		field: "name",
		type: "string",
		flex: 1,
		editable: false,
		align: "left",
		headerName: "Название",
		sortable: false,
	},
	{
		field: "language",
		type: "string",
		flex: 1,
		editable: false,
		align: "left",
		headerName: "Язык",
		sortable: false,
	},
	{
		field: "forks",
		type: "number",
		flex: 1,
		editable: false,
		align: "left",
		headerName: "Число форков",
	},
	{
		field: "stargazers_count",
		type: "number",
		flex: 1,
		editable: false,
		align: "left",
		headerName: "Число звезд",
	},
	{
		field: "updated_at",
		type: "date",
		valueGetter: (value) => new Date(value),
		flex: 1,
		editable: false,
		align: "left",
		headerName: "Дата обновления",
	},
];
