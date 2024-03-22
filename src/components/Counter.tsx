import { useState } from "react"
import classes from './counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return <>

        <button className={classes['red-button']} onClick={increment}>{count}</button>

    </>
}
