import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector}
    from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunk";

const TuitsList = () => {
    const {tuit, loading} = useSelector(
        state => state.tuitsData)
    console.log(tuit)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            tuit.map((tuit) => (
            <div>
                <TuitItem tuit={tuit} key={tuit._id} />
            </div>
            ))}
        </ul>
    );
};
export default TuitsList;