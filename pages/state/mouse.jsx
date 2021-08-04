import { useState } from 'react'
import styles from '../../styles/Mouse.module.css'

export default function Mouse() {

    const [x, setX]=useState(0)
    const [y, setY]=useState(0)
    function handleMove(event){
        setX(event.clientX)
        setY(event.clientY)
    }
    return (
        <div
            className={styles.mouse}
            onMouseMove={handleMove}
            >
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}
