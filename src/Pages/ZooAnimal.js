import axios from "axios"
import { useEffect, useState } from "react"

function ZooAnimal() {

    const [animal, setAnimal] = useState('')


    const fetchData = async () => {
        const result = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand')
        setAnimal(<div className="zoo">

            <div className="animal-descr">
                <p><b>{result.data.animal_type}</b></p>
                <p>Active at: {result.data.active_time === "Diurnal" ? "Day" : "Night"}</p>
                <p>Lives in: {result.data.habitat}</p>
                <p>In these regions: {result.data.geo_range}</p>
                <p>Eats: {result.data.diet}</p>
                <p>Can weigh up to: {result.data.weight_max} lbs</p>
                <p>Lifespan: {result.data.lifespan} years</p>
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