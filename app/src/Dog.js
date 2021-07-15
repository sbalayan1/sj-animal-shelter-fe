import React from 'react'
export default function Dog(animalData) {
    let dogArray = Object.values(animalData.animalData).filter ((animal) => animal.species === "Dog")
    let dog1 = dogArray[0]
    let dog2 = dogArray[1]
    let dog3 = dogArray[2]
    let dog4 = dogArray[3]
    let dog5 = dogArray[4]
    let dog6 = dogArray[5]
    // console.log(cat1)
    return (
      <div>
          <h1 className="greeting"><em>Hello human. Please adopt me!</em> </h1>
        <div className="animal-container">
            <div className="animal-card">
                <img className="animal-image" src='https://www.thesprucepets.com/thmb/Ua8jxHx-kU_pSBZOnhdRJEoVXi8=/4252x2835/filters:fill(auto,1)/GettyImages-1153019783-212f3a30f2874e01b82582f65010d569.jpg' alt="picture of dog"/>           
                <h4>Name: {dog1.name}</h4>
                <h6>Age: {dog1.age}</h6>
                <h6>Breed: {dog1.breed}</h6>
                <button className="adopt-button">Adopt</button>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg' alt="picture of dog2"/>           
                <h4>Name: {dog2.name}</h4>
                <h6>Age: {dog2.age}</h6>
                <h6>Breed: {dog2.breed}</h6>
                <button className="adopt-button">Adopt</button>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://www.loveyourdog.com/wp-content/uploads/2019/09/Boston-Terrier-Mixed-Breed.jpg' alt="picture of dog3"/>           
                <h4>Name: {dog3.name}</h4>
                <h6>Age: {dog3.age}</h6>
                <h6>Breed: {dog3.breed}</h6>
                <button className="adopt-button">Adopt</button>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://vetstreet.brightspotcdn.com/dims4/default/a0c30bb/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fff%2F3691e0a75511e0a0d50050568d634f%2Ffile%2FGreat-Pyrenees-3-645mk062411.jpg' alt="picture of dog4"/>           
                <h4>Name: {dog4.name}</h4>
                <h6>Age: {dog4.age}</h6>
                <h6>Breed: {dog4.breed}</h6>
                <button className="adopt-button">Adopt</button>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/30133233/Rhodesian-Ridgeback-laying-down-in-the-yard.jpg' alt="picture of dog5"/>           
                <h4>Name: {dog5.name}</h4>
                <h6>Age: {dog5.age}</h6>
                <h6>Breed: {dog5.breed}</h6>
                <button className="adopt-button">Adopt</button>
            </div> 
            <div className="animal-card">
                <img className="animal-image" src='https://vetstreet.brightspotcdn.com/dims4/default/6c59745/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F09%2F7a%2F176e1c0644c6952642997fb17f91%2Fwhippet-ap-hfjk7y-645-x-380.jpg' alt="picture of dog6"/>           
                <h4>Name: {dog6.name}</h4>
                <h6>Age: {dog6.age}</h6>
                <h6>Breed: {dog6.breed}</h6>
                <button className="adopt-button">Adopt</button>
            </div> 
        </div>
      </div>
    )
}