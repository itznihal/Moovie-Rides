import React from "react";

function Card(props) {


   
    return (

        <>


            <div className="cards" >

                <div className="image">
                    <img src = {props.imgsrc} alt=" Error"
                        className="cardimg" />
                        </div>

                    <div className="part">
                        <h3 className="title">
                           {props.moovie}
                        </h3>
                        <div className="desc"> {props.desc} </div>
                        <a href= {props.link} target="_blank" >

                            <button class = "btn" >
                                Watch Now
                            </button>

                        </a>



                </div>


            </div>
            <br/>

        </>



    );

}

export default  Card;

