import { createContext, useState } from "react"


export const Todocontext = createContext(null)

const Wapper = (props) => {
    const [todo, settodo] = useState([
        { id: 1, title: 'kam kre mere dost', iscompleted: false }
    ])
    console.log(props)
    return (<Todocontext.Provider value={[todo, settodo]}>
        {props.children}
    </Todocontext.Provider >);

};

export default Wapper;