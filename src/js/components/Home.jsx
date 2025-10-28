import React, { useState } from "react";


//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	function agregarTarea(){
		setTodos([...todos,inputValue])
		setInputValue("")
	}
	return (
		<div className="container">
			<h1>To-Do List</h1>
			
				<input
					type="text"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
					placeholder="Cosas pendientes"/>
				<button onClick={agregarTarea}>Agregar tarea</button>	
			<ul>
				{todos.map(todo=> <li key={todo}>{todo}</li>)}
			</ul>
			<div>{todos.length} tareas pendientes</div>
		</div>
	);
};

export default Home;