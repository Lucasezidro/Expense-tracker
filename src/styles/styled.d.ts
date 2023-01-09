import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            arrow: string;
    
            background: string;
            white: string;
            backgroundColor: string;
            text: string;
            textField: string;
            expense: string;
        },
    }
}