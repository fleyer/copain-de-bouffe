import { h } from 'preact';
import { useState,useEffect } from 'preact/hooks'

import FoodList from '../../components/foodList'
import style from './style.css';

const Home = () => {
	const [elems,setElems] = useState()

	useEffect(()=>{
		fetch('api/v1/food',{method: 'GET',headers:{accept: 'application/json'}})
		.then(response=>response.json())
		.then(json=>{setElems(json.data)})
	},[])

	return (
		<div class={`${style.home} flex flex-col w-full my-12 items-center`}>
			<h1 class="text-5xl mb-12 font-bold">Bienvenu !</h1>
			<h1 class="text-3xl border-b-2 mb-12">As-tu faim ?</h1>
			<FoodList class="content" elems={elems}></FoodList>
		</div>
	)
}

export default Home;
