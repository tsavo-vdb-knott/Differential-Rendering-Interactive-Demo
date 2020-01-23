import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {GenerateUid, GenerateWord} from "../../../../../lib/Data";
import {VisualizationControllers} from "../../../../Shared/Controllers";
import {styles} from "./Styles";
import '../Child';

const {standard} = VisualizationControllers;

@customElement('standard-parent-component')
export default class StandardParentComponent extends LitElement {

    static styles = styles;

    public uid: string = GenerateUid();

    @property({type: String}) public latin: string = 'Picsum';

    @property({type: Array}) public childData = [{latin: 'Lorum'}, {latin: 'Lorum'}, {latin: 'Lorum'}];


    updateSelf() {
        this.latin = GenerateWord();
    }

    updateChild(index: number) {
        const {childData} = this;
        //Immutable
        this.childData = [
            ...childData.slice(0, index),
            {latin: GenerateWord()},
            ...childData.slice(index + 1, childData.length)
        ];
    }

    protected render(): TemplateResult | void {
        const {uid, latin, childData} = this;
        standard.updateRenders('parents', uid);
        return html`
            <div class="selfActions">     
                <button @click=${this.updateSelf}>Update Self</button>
                <p>[uid: ${uid}] ${latin}</p>
            </div>
            
            <div class="actions">
                <button @click=${() => this.updateChild(0)}>Update First Child</button>
                <button @click=${() => this.updateChild(1)}>Update Second Child</button>
                <button @click=${() => this.updateChild(2)}>Update Third Child</button>
            </div>
            
            <div class="children">${childData.map(({latin}) => html`<standard-child-component .parent=${uid} .latin=${latin}></standard-child-component>`)}</div>
        `;
    }
}
