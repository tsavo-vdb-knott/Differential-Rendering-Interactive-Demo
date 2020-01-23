import {html, LitElement, property} from "lit-element";

export class BindingsReductionDemo extends LitElement {

    @property({type: Boolean}) darkMode: boolean = false;

    @property({type: Boolean}) accessible: boolean = false;

    @property({type: Object}) theme: { primary: string, secondary: string } = {primary: "#000", secondary: '#fff'};

    render() {
        const {darkMode, theme, accessible} = this;

        return html`
            <component-a ?darkMode=${darkMode} ?accessible=${accessible} .theme=${theme}></component-a>
            <component-b ?darkMode=${darkMode} ?accessible=${accessible} .theme=${theme}></component-b>
            <component-c ?darkMode=${darkMode} ?accessible=${accessible} .theme=${theme}></component-c>
            <component-d ?darkMode=${darkMode} ?accessible=${accessible} .theme=${theme}></component-d>
        `;
    }
}
