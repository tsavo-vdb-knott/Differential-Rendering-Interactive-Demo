import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {GenerateUid} from "../../../../../lib/Data";
import {styles} from "./Styles";
import {VisualizationControllers} from "../../../../Shared/Controllers";

const {standard} = VisualizationControllers;

@customElement('standard-child-component')
export class StandardChildComponent extends LitElement {

    static styles = styles;

    public uid: string = GenerateUid();

    @property({type: String}) public latin: string = 'Picsum';

    @property({type: String}) public parent: string = '';

    protected shouldUpdate(_changedProperties: Map<PropertyKey, unknown>): boolean {
        return !!parent;
    }

    protected render(): TemplateResult | void {
        const {uid, latin, parent} = this;
        standard.updateRenders('children', uid, parent);
        return html`
            <p>[uid: ${uid}]</p>
            <p>${latin}</p>            
        `;

    }
}
