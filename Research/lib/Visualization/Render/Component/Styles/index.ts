import {css} from "lit-element";

export const styles = css`
    :host{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        
    }
    
    p, h1 {
        margin: 0;
    }
    
    .node {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        width: 100%;
        height: 10rem;
        margin: 1rem;
    }
    
    .root{
        background: lightblue;
         width: calc(100% - 2rem);
         margin: 1rem auto;
    }
    
    .parents {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    
    .parent {
        border-radius: 1rem;
        background: lightcoral;
    }
    
    .children {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    
    .child {
        background: orange;
    }
    

`;

