import {customElement, html, LitElement, TemplateResult} from "lit-element";
import {Controller, GenerateWord} from "../../../../lib";
import {VisualizationControllers} from "../../../Shared/Controllers";
import {styles} from "./Styles";
import "../Components/Parent";

const {controlled} = VisualizationControllers;

@customElement('controlled-tree-demo')
export default class ControlledTree extends LitElement {

    static styles = [styles];

    public controllers: Controller[] = new Array(2).fill(2).map(_ => new Controller('root', {latin: 'Latin: Ipsum'}))

    updateFirstParent() {
        this.controllers[0].latin = GenerateWord();
    }

    updateSecondParent() {
        this.controllers[1].latin = GenerateWord();
    }

    render(): TemplateResult {
        controlled.updateRenders('root');
        const {controllers} = this;
        return html`
            <div class="actions">
                <button @click=${this.updateFirstParent}>Update First Parent</button>
                <button @click=${this.updateSecondParent}>Update Second Parent</button>
            </div>
            ${controllers.map(controller => html`<controlled-parent-component .controller=${controller}></controlled-parent-component>`)}
        `;
    }
}













