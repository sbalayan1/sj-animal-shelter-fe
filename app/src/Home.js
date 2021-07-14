

let Home = (visitorData) => {
    let visitor = Object.values(visitorData.visitorData).map ((visitor) => visitor.name)

    console.log(visitor)

    return (
        <div>
            {visitor}
        </div>
    )
}

export default Home