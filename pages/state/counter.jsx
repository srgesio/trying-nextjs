import { useState } from "react";
import styles from '../../styles/counter.module.css'

export default function Counter(){
    const [counter, setCounter] = useState(0)
    return (
        <div className={styles.counter}>
            <div className={styles.value}>Contando: {counter}</div>
            <div className={styles.buttons}>
                <button className={styles.minus} onClick={()=>{setCounter(counter-1)}}>
                    -
                </button>
                <button className={styles.plus} onClick={()=>{setCounter(counter+1)}}>
                    +
                </button>
                
            </div>
        </div>
    )
}