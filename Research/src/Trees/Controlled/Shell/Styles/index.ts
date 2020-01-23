import {css} from "lit-element";

export const styles = css`
    :host{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      
        background: lightblue;
        border-radius: 1rem;
        height: 100%;
        width: 50%;
        padding: 1rem;
        box-sizing: border-box;
    }
    
    h3 { 
        margin: .5rem auto;
    }
    
    
    .actions{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        margin-bottom: 1rem;
    }


`;

