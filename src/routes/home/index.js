import { h } from 'preact';
import { useState,useEffect } from 'preact/hooks'

import FoodList from '../../components/foodList'
import style from './style.css';

const Home = () => {
	const [elems,setElems] = useState()

	useEffect(()=>{
		fetch('http://localhost:8080/api/food',{method: 'GET',headers:{accept: 'application/json'}})
		.then(response=>response.json())
		.then(json=>{setElems(json.data)})
	},[])

	return (
		<div class={style.home}>
			<FoodList elems={elems}></FoodList>
		</div>
	)
}

export default Home;
