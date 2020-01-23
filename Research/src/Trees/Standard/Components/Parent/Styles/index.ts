import {css} from "lit-element";

export const styles = css`
    :host{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: lightcoral;
        border-radius: 1rem;
        padding: 1rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    
    .children, .actions, .selfActions{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .actions{
        width: 80%;
    }
    
    .selfActions {
        width: 50%;
    }
    
    
    p{
        margin: 0;
    }

`;

