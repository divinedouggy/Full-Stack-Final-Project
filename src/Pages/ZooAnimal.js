import axios from "axios"
import { useEffect, useState } from "react"

function ZooAnimal() {

    const [animal, setAnimal] = useState('')


    const fetchData = async () => {
        const result = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand')
        setAnimal(<div className="zoo">

            <div className="animal-descr">
                <p><span className="animal-type"><b>{result.data.animal_type}</b></span></p>
                <p><span>Active at</span> :&nbsp; {result.data.active_time === "Diurnal" ? "Day" : "Night"}</p>
                <p><span>Lives in</span> :&nbsp; {result.data.habitat}</p>
                <p><span>In these regions</span> :&nbsp; {result.data.geo_range}</p>
                <p><span>Eats</span> :&nbsp; {result.data.diet}</p>
                <p><span>Can weigh up to</span> :&nbsp; {result.data.weight_max} lbs</p>
                <p><span>Lifespan</span> :&nbsp; {result.data.lifespan} years</p>
                <h2 onClick={fetchData}>Next Exhibit&nbsp;&nbsp;&nbsp;</h2>
            </div>
            <div className="animal-divider"></div>

            <div className="animal-header">
                <img src={result.data.image_link} alt='animal' />
                <h1>{result.data.name}</h1>
                <h4>{result.data.latin_name}</h4>
            </div>

        </div>)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {animal}
        </div>
    )
}

export default ZooAnimal