import { createMuiTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

// define light theme colors
export const lightTheme: Theme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: blue[800],
        },
        secondary: {
            main: blue[800],
        },
    },
});

// define dark theme colors
export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: purple[300],
        },
        secondary: {
            main: purple[300],
        },
    },
});