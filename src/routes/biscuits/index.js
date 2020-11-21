import { h } from 'preact';
import FoodList from '../../components/foodList'
import { useState,useEffect } from 'preact/hooks'
import style from './style.css'

const Biscuits = ()=>{

    const [biscuits,setBiscuits] = useState()

	useEffect(()=>{
		fetch('api/v1/biscuits',{method: 'GET',headers:{accept: 'application/json'}})
		.then(response=>response.json())
		.then(json=>{setBiscuits(json.data)})
	},[])

    return(<div class={style.home}>
            <FoodList elems={biscuits}></FoodList>
    </div>)
}

export default Biscuits