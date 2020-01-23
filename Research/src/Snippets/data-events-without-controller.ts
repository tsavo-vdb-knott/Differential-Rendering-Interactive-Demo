import {customElement, html, LitElement} from "lit-element";

@customElement('simple-toggle')
export class Toggle extends LitElement {
    public toggled: boolean = false;

    public toggle() {
        const old = this.toggled;
        this.toggled = !this.toggled;
        dispatchEvent(new CustomEvent('toggle-changed', {detail: {old, toggled: this.toggled}}))
    }
}


export class DataEventsWithController extends LitElement {

    toggleUpdated({detail: {old, toggled}}){
        if(toggled !== old){
            //Do Something With Toggle State
        }
    }

    // First Update Is Required Here in order to start Listening to the Event.
    render() {
        return html`
            <simple-toggle @toggle-changed=${this.toggleUpdated}></simple-toggle>
        `;
    }
}
