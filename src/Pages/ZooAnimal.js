import axios from "axios"
import { useEffect, useState } from "react"

function ZooAnimal() {

const [animal,setAnimal] = useState('')

   
    const fetchData = async () => {
        const result = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand')
        setAnimal(<div><h1>{result.data.name}</h1>
        <p>{result.data.latin_name}</p>
        <img src={result.data.image_link} alt='animal'/>
        <p>{result.data.diet}</p></div>)
   
    }

    useEffect(()=>{
        fetchData()
    },[])
  
    return (
       
            <div>
               
                {animal}
              
               
            </div>
    
    )
}

export default ZooAnimal