import {css} from "lit-element";

export const styles = css`
    :host{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100%;
    }
    
    div{
        display: flex;
        flex-direction: row;
        width: 96%;
        background: lightgrey;
        margin: 1rem auto;
        border-radius: 8px;
        padding: 1rem;
        box-sizing: border-box;
    }

`;

