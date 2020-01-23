import {customElement, html, TemplateResult} from "lit-element";
import {Component} from "../../../../../lib";
import {VisualizationControllers} from "../../../../Shared/Controllers";
import {styles} from "./Styles";

const {controlled} = VisualizationControllers;

@customElement('controlled-child-component')
export class ChildComponent extends Component {

    static styles = styles;

    protected render(): TemplateResult | void {
        if (!this.controller) return;
        const {state: {latin}, uid, controller: {parent}} = this;
        controlled.updateRenders('children', uid, parent);

        return html`
            <p>[uid: ${uid}]</p>
            <p>${latin}</p>            
        `;
    }

}
