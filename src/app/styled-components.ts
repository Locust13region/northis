import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";

export const StyledSearchInput = styled(InputBase)(({ theme }) => ({
	flexGrow: 1,
	maxWidth: "912px",
	color: "inherit",
	borderRadius: "4px",
	fontSize: "14px",
	lineHeight: "24px",
	fontWeight: 500,
	backgroundColor: theme.palette.lightGray.main,
	marginRight: theme.spacing(1),
	"& .MuiInputBase-input": {
		padding: theme.spacing("10px", 1, "10px", 2),
		width: "100%",
	},
	"& .MuiInputBase-input::placeholder": {
		fontStyle: "italic",
	},
}));

export const StyledDataGrid = styled(DataGrid)(() => ({
	borderStyle: "none",
	"& .MuiDataGrid-row:hover": {
		backgroundColor: "rgba(33, 150, 243, 0.04)",
	},
	"& .MuiDataGrid-columnSeparator": {
		display: "none",
	},
	"& .MuiDataGrid-columnHeaderTitleContainer": {
		display: "flex",
		flexDirection: "row-reverse",
		justifyContent: "left",
		fontWeight: "bold",
	},
	"& .MuiDataGrid-footerContainer": {
		borderTop: "none",
	},
	"& .MuiTablePagination-toolbar": {
		padding: 0,
	},
	"& .MuiDataGrid-selectedRowCount": {
		visibility: "hidden",
	},
}));
