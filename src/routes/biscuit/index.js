import { h } from 'preact';
import FoodList from '../../components/foodList'
import { useState,useEffect } from 'preact/hooks'

import Presentation from '../../components/presentation'

import style from './style.css'

const Biscuit = (props)=>{
    console.log(props)

    const [elem,setElem] = useState()

    useEffect(()=>{
        fetch(`/api/v1/biscuits/${props.matches.item}`,{method: 'GET',headers:{accept: 'application/json'}})
        .then(response=>response.json())
		.then(json=>{setElem(json)})
    },[])

    return(
        <div class={style.home}>
            <Presentation elem={elem}></Presentation>
        </div>
    )
}

export default Biscuit