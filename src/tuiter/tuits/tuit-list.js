import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector}
    from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunk";

const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
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
            {
            tuits.map((tuit) => (
            <div>
                <TuitItem tuit={tuit} key={tuit._id} />
            </div>
            ))}
        </ul>
    );
};
export default TuitsList;