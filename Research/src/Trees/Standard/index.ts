import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {GenerateWord} from "../../../lib";
import {VisualizationControllers} from "../../Shared/Controllers";
import {styles} from "./Styles";
import './Components/Parent';

const {standard} = VisualizationControllers;

@customElement('standard-tree-demo')
export default class StandardTree extends LitElement {

    static styles = [styles];

    @property({type: Array}) public parentData = [{latin: 'Picsum'}, {latin: 'Picsum'}];

    updateFirstParent() {
        const {parentData} = this;
        //Immutable
        this.parentData = [
            {latin: GenerateWord()},
            ...parentData.slice(1, parentData.length)
        ];
    }

    updateSecondParent() {
        const {parentData} = this;
        //Immutable
        this.parentData = [
            ...parentData.slice(0, 1),
            {latin: GenerateWord()},
        ];
    }

    render(): TemplateResult {
        standard.updateRenders('root');
        const {parentData} = this;
        return html`
            <div class="actions">
                <button @click=${this.updateFirstParent}>Update First Parent</button>
                <button @click=${this.updateSecondParent}>Update Second Parent</button>
            </div>
            <div class="children">${parentData.map(({latin}) => html`<standard-parent-component .latin=${latin}></standard-parent-component>`)}</div>
        `;
    }
}













