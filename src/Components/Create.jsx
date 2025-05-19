import React, { useState } from "react"
const Create = (props) => {
    console.log(props)
    const [fulname, setfulname] = useState('')
    const [age, setage] = useState(18)


    return (

        <>
            <form onSubmit={(p) => {
                p.preventDefault()
                console.log(fulname)
                console.log(age)
            }}>
                <input type="text"
                    value={fulname}
                    placeholder='Name'
                    onChange={(e) => setfulname(e.target.value)} />
                <input type="number" placeholder='age'
                    value={age}
                    onChange={(e) => setage(e.target.value)} />
                <button>submit</button>
            </form>
        </>
    )
}

export default Create