import {h} from 'preact'

const ItemList = (props) => {
    const items = getItemList(props.items,props.itemClass)

    console.log(items)

    return(<ul class={props.class}>
        {items}
    </ul>)
}

const getItemList = (elems=[],itemClass="") => {
    return elems.map((item)=>{
        return (
            <li class={itemClass}>{item.name}</li>
        )
    })
}

export default ItemList