import {ControllerStateInterface} from "../../../Components/Controlled/Interfaces";

export interface RendersStateInterface {
    root: {
        count: number;
        parents: {
            [key: string]: {
                count: number;
                children: {
                    [key: string]: {
                        count: number;
                    }
                }
            }
        }
    };
}

export interface RendersVisualizationControllerStateInterface extends ControllerStateInterface {
    renders: RendersStateInterface;
}
