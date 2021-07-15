

let Home = (visitorData) => {
    let visitor = Object.values(visitorData.visitorData).map ((visitor) => visitor.name)

    // console.log(visitor)

    return (
        <div>
            <div className="homescreen_header">
                <h1>WestCoast WyldLyfe</h1>
            </div>
            <div className="homescreen_about">
                <h4>WestCoast WyldLyfe is an application that helps YOU find your new animal companion. By finding the nearest animal shelters to you, we hope to make the process of finding and giving these lovely animals a new home as easy as possible. Established in the summer of 2021, WestCoast Wyldlyfe has already helped dozens of animals find a new family.</h4>
            </div>
            <div className="homescreen_cards">
                <div className="shelter_card">Shelter Card goes here...</div>
                <div className="dog_card">Dog Card goes here...</div>
                <div className="cat_card">Cat Card goes here...</div>
                <div className="adoption_card">Adoption Card goes here...</div>
            </div>
            {/* {visitor} */}
        </div>
    )
}

export default Home