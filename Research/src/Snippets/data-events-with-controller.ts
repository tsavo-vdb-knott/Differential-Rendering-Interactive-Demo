import {html, LitElement} from "lit-element";

// This Controller Can be Generalized to a StateChangedCb &
// used with all of your components, rather than property specific events
export class ToggleController {
    public toggleChangedCb;

    public toggled: boolean = false;

    public toggle() {
        const old = this.toggled;
        this.toggled = !this.toggled;
        this.toggleChangedCb?.(old);
    }

    constructor(toggleChangedCb: Function) {
        this.toggleChangedCb = toggleChangedCb;
    }
}



// One Benefit here is that events & data interactions can happen independently of the render or firstUpdate
export class DataEventsWithController extends LitElement {

    public toggleController = new ToggleController((old) => this.toggleUpdated(old));

    toggleUpdated(old: boolean){
        if(this.toggleController.toggled !== old){
            //Do Something With Toggle State
        }
    }

    render() {
        return html`
            <simple-toggle .controller=${this.toggleController}></simple-toggle>
        `;
    }
}
