import axios from "axios"
import { useEffect, useState } from "react"

function ZooAnimal() {

const [animal,setAnimal] = useState('')
const [animalImage,setAnimalImage] = useState('')

   
    const fetchData = async () => {
        const result = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand')
        setAnimal(<p>{result.data.name}</p>)
        setAnimalImage(<img src={result.data.image_link} alt='animal'/>)
    }

    useEffect(()=>{
        fetchData()
    },[])
  
    return (
       
            <div>
               
                {animal}
                {animalImage}
               
            </div>
    
    )
}

export default ZooAnimal