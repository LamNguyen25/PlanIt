import { DefaultTheme } from "@react-navigation/native";

export const colors = {
    primary: "#2a9d8f",
    secondary: "#414757",
    error: "#f13a59",
    success: "#00B386",
    
    txtMain: '#214559',
    txtMainRed: '#FE6165',
    txtDescription: '#757575',
    txtDark: '#214559',
    txtWhite: '#ffffff',
    txtBlack: '#000000',

    //bgMain: '#A8DADC',
    bgTitle: '#348183',
    bgMain: '#fffffc',
    bgMainDark: '#214559', // For screens > auth
    bgMainRed: '#FE6165',
    bgWhite: '#ffffff',
    bgError: '#fb642d',
    bgChat: '#f1f1f1',
    bgSuccess: '#25ce66',
    
    bdMain: '#214559',
    bdMainRed: '#FE6165',
    bdWhite: '#ffffff',
    bdLine: '#dddddd',
    bdInput: '#cbcbcb',
    bdNightBlue: '#457b9d',
    warning: "#e91e63",
};

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary, //menu highlight: when a menu item is clicked
    background: colors.bgMain, //page background
    card: colors.bgTitle, //header
    text: colors.white, //menu text color
    border: colors.txtBlack, //
    notification: colors.warning,
  },
};
