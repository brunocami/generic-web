import React, { useEffect, useState } from 'react'
import '../../App.css'
import CardItem from '../CardItem';
import '../Cards.css'

export default function Products() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [provincias, setProvincias] = useState([]);

    

    // API de provincias de Argentina
    useEffect(() => {
        fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
            .then(response => response.json())
            .then(data => {
                console.log(data.provincias)
                setIsLoaded(true);
                setProvincias(data.provincias);
            },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {provincias.slice(0, 2).map(item => (
                            <CardItem 
                            key={item.id}
                            src={`images/${item.nombre.replace(/ /g, "")}.jpg`}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label={item.nombre}
                            path="/"
                            />
                        ))}
                    </ul>
                    <ul className="cards__items">
                        {provincias.slice(2, 5).map(item => (
                            <CardItem 
                            key={item.id}
                            src={`images/${item.nombre.replace(/ /g, "")}.jpg`}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label={item.nombre}
                            path="/"
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}