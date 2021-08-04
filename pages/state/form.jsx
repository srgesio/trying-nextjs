import { useState } from "react"


export default function Form(){
    const [text, setText] = useState('')
    return(
        <div>
            <input type="text" value={text} onChange={(text)=>setText(text.target.value)} />
        </div>
    )
}