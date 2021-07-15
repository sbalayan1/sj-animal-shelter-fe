import React from 'react'
import { useHistory } from 'react-router-dom'

let Home = (visitorData) => {
    const history = useHistory()
    // let visitor = Object.values(visitorData.visitorData).map ((visitor) => visitor.name)

    const handleRenderDog = () => {
        history.push('/dogs')
    }

    const handleRenderCat = () => {
        history.push('/cats')
    }

    const handleRenderShelter = () => {
        history.push('/shelters')
    }

    const handleRenderAdoption = () => {
        history.push('/adoptions')
    }

    // console.log(visitor)

    return (
        <div>
            <div className="homescreen_header">
                <h1>WestCoast WyldLyfe</h1>
            </div>
            <div className="homescreen_about">
                <h4>WestCoast WyldLyfe is an application that helps YOU find your new animal companion. By finding the nearest animal shelters to you, we hope to make the process of finding and giving these lovely animals a new home as easy as possible. <hr></hr>Established in the summer of 2021, WestCoast Wyldlyfe has already helped dozens of animals find a new family.</h4>
            </div>
            <div className="homescreen_cards">
                <div className="shelter_card" onClick={handleRenderShelter}>See all shelters!</div>
                <div className="dog_card" onClick={handleRenderDog}>See all dogs!</div>
                <div className="cat_card" onClick={handleRenderCat}>See all cats!</div>
                <div className="adoption_card" onClick={handleRenderAdoption}>See all adoptions!</div>
            </div>
            {/* {visitor} */}
        </div>
    )
}

export default Home