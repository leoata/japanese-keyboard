import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        h1: {
            fontWeight: 900,
            fontSize: 60,
            fontFamily: "Inter",
            /* center it */
            display: "flex",
            justifyContent: "center",
        },
        h2: {
            fontWeight: 900,
            fontSize: 48,
            fontFamily: "Inter",
            display: "flex",
            justifyContent: "center",
        },
        h3: {
            fontWeight: 800,
            fontFamily: "Inter",
            fontSize: "22px",
        },
        h4: {
            fontWeight: 900,
            fontFamily: "Inter",
            fontSize: "24px",
        },
        h5: {
            fontWeight: 700,
            fontFamily: "Inter",
            fontSize: "20px",
        }
    },
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#666666",
        },
    }
});

export default theme;
