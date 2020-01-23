import { LitElement, property} from "lit-element";
import {Controller} from "../Controller";
import {ControllerStateInterface} from "../Interfaces";
import {GenerateUid} from "../../../Data";

export default class Component extends LitElement {
    // Lit Element Property Decorator
    @property({type: Object}) state: ControllerStateInterface = {};

    // Total number of renders for research
    protected renders = 0;

    public uid = GenerateUid();


    // This is the callback that will be injected into the controller - which then, when called back, updates the components state.
    public exposedStateChangedCb = async (state: ControllerStateInterface) => {

        //Refers to the Element's Property Above
        this.state = state;
    };

    // Simple getter and setters for the controller to be injected.
    protected _controller?: Controller;

    set controller(controller: Controller | undefined) {
        if (controller !== this._controller) {
            // Tear Down
            delete this._controller?.stateChangedCb;
            delete this._controller;

            //Reset the Controller
            this._controller = controller;

            if (this._controller) {
                //Pick Up initial State
                console.log(this._controller.latin, this._controller.state);
                this.state = this._controller.state;
                this._controller.stateChangedCb = this.exposedStateChangedCb;
            }
        }
    }

    get controller(): Controller | undefined {
        return this._controller;
    }

    protected shouldUpdate(_changedProperties: Map<PropertyKey, unknown>): boolean {
        return Boolean(this.controller);
    }

}


