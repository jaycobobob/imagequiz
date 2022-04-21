import Flower from "./flower";
import api from "../../data/api";
import { useEffect, useState } from "react";

const FlowerDisplay = (props) => {
    let [flowers, setFlowers] = useState();

    useEffect(() => {
        const loadData = async () => {
            let res = await api.getFlowers();
            if (res.done) setFlowers(res.result);
        };
        if (!flowers) loadData();
    }, []);

    // if we can't/haven't loaded the data
    if (!flowers) {
        return <div>Flower Display</div>;

        // if the data has been retrieved
    } else {
        let flowersGrid = squareArray(flowers, 4);
        return (
            <div>
                {flowersGrid.map((row, rowNum) => {
                    return (
                        <div className="row py-2" key={`row ${rowNum}`}>
                            {row.map((flower, colNum) => {
                                return (
                                    <div className="col-sm-3" key={`col ${colNum}`}>
                                        <Flower name={flower.name} src={flower.picture} />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
};

const squareArray = (arr, size) => {
    let out = [];
    let temp = [];
    for (let item of arr) {
        temp.push(item);

        if (temp.length === size) {
            out.push(temp);
            temp = [];
        }
    }
    if (temp.length > 0) {
        out.push(temp);
    }
    return out;
};

export default FlowerDisplay;
