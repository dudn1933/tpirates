import { useContext } from "react";
import { PostsContext } from "../../App";
import { storeData } from "../../json/demo_data";
import StoreList from "./storeList/StoreList"

const Main = () => {
    const { on, detail } = useContext(PostsContext);

    return (
        <>
            {!on && !detail && storeData.map((props) => {
                return (
                <StoreList key={props.id} {...props} />
                )
            })}
        </>
    )
}

export default Main;