import {customElement, html, LitElement, TemplateResult} from "lit-element";
import {styles} from "./Styles";
import '../../lib/Visualization/Render';
import {VisualizationControllers} from "../Shared/Controllers";
import "../Trees";

const {standard, controlled} = VisualizationControllers;

@customElement('runtime-research-app')
export class RuntimeResearch extends LitElement {

    static styles = styles;

    render(): TemplateResult {
        return html`
             <h1>Standard Tree Demo</h1>
             <div>
                <standard-tree-demo></standard-tree-demo>
                <runtime-tree-renders-visualizer .controller=${standard}></runtime-tree-renders-visualizer>
            </div>
            
            <h1>Controlled Tree Demo</h1>
            <div>
                <controlled-tree-demo></controlled-tree-demo>
                <runtime-tree-renders-visualizer .controller=${controlled}> </runtime-tree-renders-visualizer>
            </div>
         
        `;
    }
}













