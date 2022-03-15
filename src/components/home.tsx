import { useEffect, useState } from "react";

function Home() {
    const [count, setCount] = useState(0)
    const [testObj, setTestObj] = useState(null)
    
    useEffect(() => {
        return () => {
        }
    }, [count])
    
    useEffect(() => {
        return () => {
        }
    },[testObj])
    return (
        <div>home{count}</div>
    )
}

export default Home;