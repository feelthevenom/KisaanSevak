import React,{useState,useEffect} from "react";
import Nav from "./Nav";
import Card from "./Card";
import "./styles.css";
import out from "./Detail";
import Pageselect from "./Pageselect";

function App()
{
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return <div className="main">
        <Nav />
        {" "}
            {showTopBtn && (
        <button className="top-btn" onClick={goToTop}>⬆</button>
        )}{" "}

        <div className="allCard">   
        <Card title={out.data[0].title} info={out.data[0].msg}/>
        <Card title={out.msg}/>
        <Card title={out.msg}/>
        <Card title={out.msg}/>
        <Card title={out.msg}/>
        <Card title={out.msg}/>
        <Card title={out.msg}/>
        <Card title={out.msg}/>
        </div>
        <div className="page">
        <Pageselect />
        </div>
        <div className="foot">@Feelthevenom</div>
    </div>
}

export default App;