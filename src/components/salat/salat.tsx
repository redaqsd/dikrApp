import Controller from "../controller/controller"
import salatAdkar from "../../data/salat"



function Salat (){
    return <Controller array = {salatAdkar} name = {"   أذكار بعد الصلاة  "} />
}


export default Salat