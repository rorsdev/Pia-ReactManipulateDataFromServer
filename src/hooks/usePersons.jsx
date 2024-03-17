import { useEffect, useState } from "react";
import axios from "axios";

export const usePersons = () => {
    // const [persons, setPersons] = useState([
    //     { name: 'Arto Hellas', number: '040-123456', id: 1 },
    //     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    //     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    //     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    // ]);
    const [persons, setPersons] = useState([]);

    const handleChangePersonsValue = (newValue) => {
        setPersons(newValue)
    }

    // useEffect( () => {
    //     axios.get('http://localhost:3001/persons')
    //     .then(response => {
    //         console.log(response)
    //         handleChangePersonsValue(response.data)
    //     })
    //     .catch((error) => alert(`ERROR: ${error}`))
    // }, [])

    useEffect( () => {
        fetch('http://localhost:3001/persons')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                handleChangePersonsValue(data)
            })
            .catch((error) => alert(`ERROR: ${error}`))			
    }, [])

    return {
        persons,
        handleChangePersonsValue
    };
}

