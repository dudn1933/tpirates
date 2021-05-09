import { storeData } from "../../json/demo_data";
import StoreList from "./storeList/StoreList"
import {useContext} from "react"
import {PostsContext} from "../../App"

const Main = () => {
    const {on, detail} = useContext(PostsContext);
    return (
        <>
            {!on&&!detail&&storeData.map((props) => {
                return (
                <StoreList key={props.id} {...props} />
                )
            })}
        </>
    )
}

export default Main;