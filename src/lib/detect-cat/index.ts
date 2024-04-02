import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";

export const detectCat = (image) => {
    const runCoco = async () => {
        const net = await cocossd.load();

        detect(net);
    };

    const detect = async (net) => {
        const obj = await net.detect(image);
        console.log(obj);
    }
};