import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		headerBg: Palette["primary"];
		deepGray: Palette["primary"];
		lightGray: Palette["primary"];
	}

	interface PaletteOptions {
		headerBg?: PaletteOptions["primary"];
		deepGray?: PaletteOptions["primary"];
		lightGray?: PaletteOptions["primary"];
	}
}

declare module "@mui/material/AppBar" {
	interface AppBarPropsColorOverrides {
		headerBg: true;
	}
}

const defaultTheme = createTheme();

export const theme = createTheme({
	palette: {
		headerBg: {
			main: "#00838F",
		},
		deepGray: {
			main: "#4F4F4F",
		},
		lightGray: {
			main: "#F2F2F2",
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					"&.MuiContainer-maxWidthXl": {
						maxWidth: "1440px",
					},
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				gutters: {
					[defaultTheme.breakpoints.up("sm")]: {
						paddingLeft: "39px",
						paddingRight: "39px",
					},
				},
				root: {
					padding: defaultTheme.spacing(2.4, 0, 2.4, 0),
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				label: {
					padding: "0 10px",
				},
			},
		},
		MuiRating: {
			styleOverrides: {
				sizeMedium: {
					fontSize: "20px",
				},
			},
		},
	},
});
