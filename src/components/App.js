import React,{useState,useEffect} from "react";
import Nav from "./Nav";
import Card from "./Card";
import "./styles.css";
import out from "./Detail";

function App()
{
    // const cardlen=out.data.length;
    const [showTopBtn, setShowTopBtn] = useState(false);
    // var page;
    // const qt=cardlen/9;

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
    
    // function selectPage()
    // { 

    //     if(qt>Math.round(qt))
    //     {
    //       page=(1-(qt-Math.round(qt)))+(qt-Math.round(qt))+Math.round(qt);
    //       return page;
    //     }
    //     else
    //      {
    //         page=Math.round(qt);
    //         return page;
    //      }
         
    // }
    function cards(contact)
    {
        return <Card img={contact.img} detail={contact.detail} title={contact.title}/>;
    }

  

    return <div className="main">

        <Nav />


        {" "}
            {showTopBtn && (
        <button className="top-btn" onClick={goToTop}>⬆</button>
        )}{" "}


        <div className="allCard">   
        {out.data.map(cards)}
        </div>

        {/* <div className="foot">@Feelthevenom</div> */}
    </div>
}

export default App;