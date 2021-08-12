import styles from './ItemCard.module.scss';

function ItemCard({title, background, type, image}) {
    return (
        <img src={image} alt={title} />
    )
}

export default ItemCard