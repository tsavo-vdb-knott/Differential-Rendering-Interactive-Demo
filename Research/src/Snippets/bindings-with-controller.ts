import {html, LitElement} from "lit-element";

export class SharedPropertiesController {
    public requestUpdateCallback;

    public darkMode: boolean = false;

    public accessible: boolean = false;

    public theme: {primary: string, secondary: string} = {primary: "#000", secondary: '#fff'};

    public updateProperty(name, value){
        this[name] = value;
        this.requestUpdateCallback?.();
    }

    constructor(requestUpdateCallback: Function) {
        this.requestUpdateCallback = requestUpdateCallback;
    }
}

export class BindingsReductionWithController extends LitElement {
    public sharedPropertiesController = new SharedPropertiesController(() => this.requestUpdate());

    render() {
        const {sharedPropertiesController} = this;
        const {darkMode, accessible} = sharedPropertiesController;

        return html`
            <component-a .controller=${sharedPropertiesController}></component-a>
            <component-b .controller=${sharedPropertiesController}></component-b>
            <component-c .controller=${sharedPropertiesController}></component-c>
            
            <!--  Example of still only applying one or two properties -->
            <component-d ?darkMode=${darkMode} ?accessible=${accessible}></component-d>
        `;
    }


}
