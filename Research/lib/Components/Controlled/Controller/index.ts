import {ControllerStateInterface} from "../Interfaces";

export class Controller {
    // To be assigned to an async anonymous function
    public stateChangedCb?: { (state: ControllerStateInterface): Promise<void> };

    // Generic Property which is set and retrieved
    private _latin?: string;

    public parent?: string;

    set latin(_latin: string | undefined) {
        if (_latin !== this._latin) {
            // Tear Down
            delete this._latin;
            this._latin = _latin;
            // Making a copy of the state so that lit element can pick up on the changes using default change detection.
            this.stateChangedCb?.(this.state);
        }
    }

    get latin(): string | undefined {
        return this._latin;
    }

    //Read Only getter of the sate
    public get state(): ControllerStateInterface {
        const {latin} = this;
        return {
            latin
        }
    };

    constructor(parent: string, state?: ControllerStateInterface) {
        this.parent = parent;
        if (state) {
            Object.entries(state).forEach(([key, value]) => {
                this[`_${key}`] = value;
            });
        }
    }

}


//Enhancements to this (Change Driven)
//Async Updating
