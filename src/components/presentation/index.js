import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState,useEffect } from 'preact/hooks'

import ItemList from '../itemList'
import Button from '../button'

import style from './style.css';


const Presentation = (props) => {
    const [elem,setElem] = useState()

    console.log(elem)
    console.log(props)
    
    if(props.elem) setElem(props.elem)

    if(elem){
        return (
            <div class="flex flex-col space-y-4 justify-center items-center w-full py-8">
                <div class="lg:w-3/5 px-12 pt-8 flex flex-col">
                    <div class="flex flex-1 w-full justify-center" loading="lazy">
                         <div class={`${style.presentationContainer} rounded-full overflow-hidden flex h-64 w-64 justify-center align-items-center`}>
                            <img class={style.presentationLogo} height="100" src={elem.imageLink}></img>
                         </div>
                    </div>
                    
                </div>
                <div class={`${style.description} bg-white border-2 p-8 mt-12 rounded-lg lg:w-3/5`}>
                    <div class="flex items-center">
                        <h2 class="title ">{elem.name}</h2> 
                        <Button class="text-white font-semibold ml-4 p-2 rounded-lg bg-green-500" text="Available"></Button>
                    </div>
                    <p>
                        {elem.description}
                    </p>
                </div>
                <h2 class="subtitle lg:w-3/5 border-b-2">Ingredients</h2>
                <ItemList 
                    class="lg:w-3/5" 
                    itemClass="py-4 px-8 text-xl"
                    items={elem.ingredients}>

                    </ItemList>
            </div>
        )
    }

    
};

export default Presentation;
