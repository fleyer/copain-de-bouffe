import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const List = (props) => (
    <div class={style.foodList}>
        <p class="text-xl">Partager vos repas</p>
        <ul class={style.list}>
            {getList(props.elems)}
        </ul>
    </div>
);

function getList(elems){
    return (elems||[]).map(elem=>getListItemDisplay(elem)) 
}

function getListItemDisplay(elem){
    return (
        <li class="bg-white rounded-lg p-2 m-2">
            <Link href={elem.link} class="flex">
                <div class={style.listImageContainer}>
                    <img src={elem.imageLink} class={style.image} loading="lazy"></img>
                </div>
                <div class={style.listItemContent}>
                    <p class="text-xl font-bold">{elem.name}</p>
                    <p class={style.listItemDescription}>
                        {elem.description}
                    </p>
                    <div class={style.listItemFooter}>

                    </div>
                </div>
            </Link>
        </li>
    )
}

export default List;
