import styles from './Sidebar.module.css';
import Card from "../Card/Card";


export default function Sidebar(){
    return(
    <Card>
        <aside className={styles.sidebar}>
            Sidebar
        </aside>
    </Card>
    )
}