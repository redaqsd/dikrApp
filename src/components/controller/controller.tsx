import { FaArrowRightToBracket } from "react-icons/fa6"
import { Link } from "react-router-dom"
import "../style.css"
import { DikrContext } from "../../context"
import { useContext, useState } from "react"
import { FaArrowAltCircleLeft , FaArrowAltCircleRight } from "react-icons/fa"

function Controller ({array , name} : any){

    const {i , setI} = useContext<any>(DikrContext)
    const [data , setData] = useState<any>(array)

    function handleNums () {
        if(data[i].value === 1){
            return <div className="numbers">
                مرة واحدة
            </div>
        }else if (data[i].value === 3) {
            return <div className="numbers">
                ثلاث مرات  
            </div>
        }else {
            return <div className="numbers">
                ثلاث وثلاثين مره  
            </div>
        }
    }

    function arrowLeft (){
        if(i === data.length - 1){
            setI(0)
        }else {
            setI(i + 1)
        }
    }

    function arrowRight (){
        if(i < 1){
            setI(data.length - 1)
        }else {
            setI(i - 1)
        }
    }

    function resetFunc (){
        setI(0)
        let newData = [...data]
        for(let x = 0 ; x < data.length ; x++){
            newData[x].current = 0
        }
        setData(newData)
    }


    const doneElem = data.find((elem: any) => elem.current !== elem.value)
    if (!doneElem) {
        return <div className="doneDiv">
            <h1 >Done All Dikr!!!</h1>
            <Link to = {"/"}>
                <FaArrowRightToBracket className="exit2" onClick={() => resetFunc()}/>
            </Link>
        </div>
    }

    function handleCircle() {
        let newData = [...data]
        newData[i].current = newData[i].current + 1
        setData(newData)

        if (data[i].current === data[i].value) {
            if (i === data.length - 1) {
                const newIndex = data.indexOf(doneElem)
                setI(newIndex)
            } else {
                setTimeout(() => {
                    setI(i + 1)
                },500)
            }
        }
    }

    return <div className="Div">
        <div className="Nav">
            <Link className="exit" to = {"/"}>
                <FaArrowRightToBracket onClick={() => setI(0)}/>
            </Link>
            <p className="dikrTitle"> {name} </p>
        </div>

        <div  className="singleDikr">
            {data[i].dikr}
        </div>

        <div className="contollers">
            <FaArrowAltCircleLeft onClick={() => arrowLeft()} className="arrow" />
            <div className="options">
                <span> {i + 1}/{data.length} </span>
                <div className="circle" onClick={() => handleCircle()}> {data[i].current} </div>
                {handleNums()}
            </div>
            <FaArrowAltCircleRight onClick={() => arrowRight()} className="arrow"/>
        </div>
    </div>
}


export default Controller