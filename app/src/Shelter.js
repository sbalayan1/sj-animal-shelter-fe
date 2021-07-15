import React from 'react'

export default function Shelter(shelterData) {

    let laShelterArray = Object.values(shelterData.shelterData).filter ((shelter) => shelter.location_id === 53)

    let sfShelterArray = Object.values(shelterData.shelterData).filter ((shelter) => shelter.location_id === 54)

    let laShelter1 = (laShelterArray[0])
    let laShelter2 = (laShelterArray[1])
    let laShelter3 = (laShelterArray[2])

    let sfShelter1 = (sfShelterArray[0])
    let sfShelter2 = (sfShelterArray[1])

    // console.log(laShelter1)

    return (
        <div className="shelter-container">
            <div className="shelter-card">
                <img className="shelter-pic" src="https://lh3.googleusercontent.com/proxy/AOchwSjLmMCrF-Mvy2FZ1uaa_5Pps6QNMBRTxaoSzvYBP4aJJAKm297ERw4p_8tjQ3oizAbtc0K2XdfT9F3WodTgt706wcdPDGXCRX4G9Np2ofkmJS5Bo3_B9z8LHnQcoAIX9oVUgFqako7rxUiqI6aYcoI4p8xlu7XelxB5aoyDrICs47-bXfu3W3pW275viuAYkGwJgg" alt="shelter-pic-1"/>
                <h4>{laShelter1.name}</h4>
                <h5>--Los Angeles Area--</h5>
            </div>
            <div className="shelter-card">
                <img className="shelter-pic" src="https://www.dupageanimalfriends.org/uploads/1/1/0/6/110659955/published/shelter.png?1513477991" alt="shelter-pic-2"/>
                <h4>{laShelter2.name}</h4>
                <h5>--Los Angeles Area--</h5>
            </div>
            <div className="shelter-card">
                <img className="shelter-pic" src="https://www.mnpower.com/Content/Images/Company/MPJournal/2017/12202017_01.jpg" alt="shelter-pic-3"/>
                <h4>{laShelter3.name}</h4>
                <h5>--Los Angeles Area--</h5>
            </div>
            <div className="shelter-card">
                <img className="shelter-pic" src="http://sacramentocityexpress.com/wp-content/uploads/2014/03/mg_5874.jpg?w=604" alt="shelter-pic-4"/>
                <h4>{sfShelter1.name}</h4>
                <h5>--San Francisco Area--</h5>
            </div>
            <div className="shelter-card">
                <img className="shelter-pic" src="https://i.pinimg.com/originals/97/19/9c/97199cdda2fec20471eb88c8da150220.jpg" alt="shelter-pic-5"/>
                <h4>{sfShelter2.name}</h4>
                <h5>--San Francisco Area--</h5>
            </div>
        </div>
    )
}
