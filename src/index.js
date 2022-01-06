import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"
import "./index.css";



ReactDOM.render(

    <>

    <h1 className = "heading" >List Of top 5 Netflix Series in 2020</h1>
    <div className="main">

        <Card imgsrc = "https://m.media-amazon.com/images/M/MV5BNjRmMDUxODctYjg3NC00NDRhLWJhZWItMjg0OTZkMDBjNWUxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg"   
            desc = "Resident Evil: Welcome to Raccoon City (2021)"
        moovie = " Resident Evil "
        link = "https://themoviesverse.co/download-resident-evil-welcome-to-raccoon-city-2021-english-480p-720p-1080p/"

        />
         <Card imgsrc = "https://imagecurl.com/images/53129720007903458134_thumb.png"   
            desc = "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more"
        moovie = " The Matrix Resurrections (2021)"
        link = "https://imagetot.com/images/2021/12/22/8ffc6c30105d7e4da82eb0c73c01fa08.png"

        />

<Card imgsrc = "https://i.imgur.com/UuGRW0v.png"   
            desc = "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate M. Bishop, who took on the role after the original Avenger, Clint Barton."
        moovie = " Marvel Hawkeye S01"
        link = "https://themoviesverse.co/download-marvel-hawkeye-season-1-hindii-english-480p-720p-1080p/"

        />
    </div>
    </>
    ,

    document.getElementById("root")
)