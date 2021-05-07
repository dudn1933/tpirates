import { storeData } from "../../json/demo_data";
import StoreList from "./storeList/StoreList"

const Main = () => {
    return (
        <>
            {storeData.map((props) => {
                return (
                <StoreList key={props.id} {...props} />
                )
            })}
        </>
    )
}

export default Main;