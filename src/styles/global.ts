import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --shape: #ffffff;

        --bug: #92BC2C;
        --dark: #595761;
        --dragon: #0C69C8;
        --electric: #F2D94E;
        --fire: #FBA54C;
        --fairy: #EE90E6;
        --fighting: #D3425F;
        --flying: #A1BBEC;
        --ghost: #5F6DBC;
        --grass: #5FBD58;
        --ground: #DA7C4D;
        --ice: #75D0C1;
        --normal: #A0A29F;
        --poison: #B763CF;
        --psychic: #FA8581;
        --rock: #C9BB8A;
        --steel: #5695A3;
        --water: #539DDF;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
			font-size: 93.75%; // equivalente a 15px
	    }

	    @media(max-width: 720px){
		font-size: 87.5%; // equivalente a 14px
	    }
    }

    body {
        background: var(--background);
    }
`


















