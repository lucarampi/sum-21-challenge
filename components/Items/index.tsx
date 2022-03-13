import styles from './styles.module.scss';

interface ItemsProps{
    value: number
}

export default function Itemm({value}:ItemsProps){
    return(
        <div className={styles.item_box + " col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 mx-1 text-center"}>{value}</div>
    )

}