import {customElement, html, TemplateResult} from "lit-element";
import {Component, Controller, GenerateWord} from "../../../../../lib";
import {VisualizationControllers} from "../../../../Shared/Controllers";
import {styles} from './Styles';
import '../Child';

const {controlled} = VisualizationControllers;

@customElement('controlled-parent-component')
export class ParentComponent extends Component {

    static styles = styles;

    protected renders = 0;

    public controllers: Controller[] = new Array(3).fill(3).map(_ => new Controller(this.uid, {latin: 'Latin: Lorum'}))

    updateSelf() {
        if (this.controller)
            this.controller.latin = GenerateWord();
    }

    updateChild(index: number) {
        this.controllers[index].latin = GenerateWord();
    }

    protected render(): TemplateResult | void {
        const {controllers, uid, controller} = this;
        controlled.updateRenders('parents', uid);
        if (!controller) return;
        const {state: {latin}} = controller;
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
             <div class="children">${controllers.map(controller => html`<controlled-child-component .controller=${controller}></controlled-child-component>`)}</div>
        `;
    }

}
