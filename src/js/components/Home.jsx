import React, { useState } from "react";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	
	function agregarTarea(){
		if(!inputValue.trim() ) return;
		setTodos([...todos,inputValue.trim()])
		setInputValue("")
	}
	function quitarTarea(indexTarea){
		setTodos(todos.filter((_, indexActual) => indexActual !== indexTarea));

	}

	return (
		<div className="container text-center mt5">
			<h1 className="display-3 text-primary fw-light">To-Do List</h1>
			<div className="row justify-content-center">
                <div className="col-10 col-md-6 d-flex mb-3"></div>
				<input
					type="text"
					className="form-control form-control-lg shadow-sm"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
					onKeyDown={(event) => event.key === "Enter" && agregarTarea()}
					placeholder="Cosas pendientes"/>

				<button 
				className="btn btn-primary btn-lg ms-2 shadow-sm"
				onClick={agregarTarea}>Agregar tarea</button>
			</div>
				
			<ul className="list-group shadow mx-auto">
				{todos.map((tarea, indiceTarea) =>(
					<li 
					className="list-group-item d-flex justify-content-between align-items-center" 
					key={indiceTarea}>{tarea}
					<i 
					className="fa-solid fa-trash ms-2 text-danger" 
					onClick={() => quitarTarea(indiceTarea)} 
					style={{color:"crimson"}}>
						</i>
						</li>
				))}
			</ul>
			<p className="text-muted mt-3">{todos.length} tareas pendientes</p>
		</div>
	);
};

export default Home;