import { FiSunset } from "react-icons/fi"
import { FiSunrise } from "react-icons/fi"
import { IoIosMoon } from "react-icons/io"
import { PiHandsPrayingBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import "./home.css"

function Home (){
    return <div className="home">
        <h1 className="title"> تطبيق الاذكار </h1>
        <div className="btns">
            <Link to={"/morning"} className="morning">
                <FiSunrise className="icon" />
                <div className="text-div">
                    <p> اذكار الصباح </p>
                </div>
            </Link>
            <Link to={"/night"} className="night">
                <FiSunset className="icon" />
                <div className="text-div">
                    <p> أذكار المساء </p>
                </div>
            </Link>
            <Link to={"/sleep"} className="sleep">
                <IoIosMoon className="icon" />
                <div className="text-div">
                    <p> أذكار النوم </p>
                </div>
            </Link>
            <Link to={"/salat"} className="salat">
                <PiHandsPrayingBold className="icon" />
                <div className="text-div">
                    <p> أذكار بعد الصلاة  </p>
                </div>
            </Link>
        </div>
    </div>
}

export default Home