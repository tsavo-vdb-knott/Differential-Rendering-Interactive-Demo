import {customElement, html, TemplateResult} from "lit-element";
import {Component} from "../../../Components/Controlled";
import {RendersVisualizationController} from "../Controller";
import {styles} from './Styles';


@customElement('runtime-tree-renders-visualizer')
export default class RendersVisualizationComponent extends Component {

    static styles = styles;

    protected _controller?: RendersVisualizationController;

    get controller(): RendersVisualizationController | undefined {
        return this._controller;
    }

    set controller(controller: RendersVisualizationController | undefined) {
        super.controller = controller;
    }


    protected render(): TemplateResult | void {
        if (!this.controller) return;
        const {controller: {renders: {root: {count, parents}}}} = this;
        const __children: TemplateResult[] = [];
        return html`
                <h1>DOM Visualization & Render Count</h1>
                <div class="root node">
                    <p>Root</p> <h1>${count}</h1>
                </div>
                <div class="parents">
                    ${Object.entries(parents).map(([key, {count, children}]) => {
                        __children.push(html`${Object.entries(children).map(([key, {count}]) => html`<div class="child node"><p>[uid: ${key}]</p> <h1>${count}</h1></div>`)}`)
                        return html`
                        <div class="parent node">
                            <p>Parent: [uid: ${key}]</p> <h1>${count}</h1>
                        </div>`
                    })}
                </div>
                <div class="children">${__children}</div>
        `;
    }

}
