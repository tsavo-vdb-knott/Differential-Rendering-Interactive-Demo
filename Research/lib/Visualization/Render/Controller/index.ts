import {Controller} from "../../../Components/Controlled/Controller";
import {RendersStateInterface, RendersVisualizationControllerStateInterface} from "../Interfaces";

export class RendersVisualizationController extends Controller {

    // Generic Property which is set and retrieved
    renders: RendersStateInterface = {root: {count: 0, parents: {}}};

    public get state(): RendersVisualizationControllerStateInterface {
        const {renders} = this;
        return {
            renders,
            ...super.state,
        };
    }

    updateRenders(category: 'root' | 'parents' | 'children', uid?: string, parent?: string,) {
        if (category === 'root') this.renders[category].count++;

        if (category === 'parents' && uid && !parent) {
            if (!this.renders.root[category][uid]) this.renders.root[category][uid] = {count: 0, children: {}};
            this.renders.root[category][uid].count++;
        }

        if (category === 'children' && parent && uid) {
            if (!this.renders.root.parents[parent][category][uid]) this.renders.root.parents[parent][category][uid] = {count: 0};
            this.renders.root.parents[parent][category][uid].count++;
        }

        this.stateChangedCb?.(this.state);
    }

}
