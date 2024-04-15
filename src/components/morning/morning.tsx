import Controller from "../controller/controller"
import morningAdkar from "../../data/morning"

function Morning (){
    return <Controller array = {morningAdkar} name = {" اذكار الصباح "} />
}


export default Morning