import { Filter, Numbers, PersonForm } from "./components";
import { useFormFilter, usePersons, useForm } from "./hooks";
import axios from "axios";

const App = () => {

	// const promise = axios.get('https://catfact.ninja/fact')
	// .then(response => {
	// 	console.log("EMPIEZA LO BUENO: MIRA ESTE DATO DE GATOS:")
	// 	console.log(response.data.fact)
	// })

	const { newName, newNumber, handleNewNameValue, handleNewNumberValue } = useForm();
	const { newFilter, handleNewFilterValue } = useFormFilter();
	const { persons, handleChangePersonsValue} = usePersons();
	
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter setNewFilter={ handleNewFilterValue }/>
			<PersonForm 
				newName={ newName } 
				setNewName={ handleNewNameValue } 
				newNumber={ newNumber }
				handleNewNumber={ handleNewNumberValue }
				persons={ persons }
				setPersons={ handleChangePersonsValue }

			/>
			<Numbers newFilter={ newFilter } persons={ persons }/>
		</div>
	);
};

export default App;
