import React, { useState } from "react"
const App = () => {
  const [todo, settodo] = useState(
    [
      { index: 1, tittle: "kam krle bhai mere yarr dost ", discription: "done" }
    ]
  )
  const [input, setinput] = useState('')
  const [completed, setcompleted] = useState(true)
  const [gender, setgender] = useState('female')
  const [city, setcity] = useState("Bhopal")
  return (
    <>
      <form >
        <input type="text"
          placeholder="tittle"
          value={input}
          onChange={(e) => setinput(e.target.value)} />
        <br />
        <br />
        <br />
        <br />
        <input type="checkbox"
          checked={completed}
          onChange={(e) => setcompleted(e.target.checked)} /> completed
        <br />
        <br />
        <br />
        <br />
        <input
          value='male'
          checked={gender == 'male' && true}
          onChange={(e) => setgender(e.target.value)}
          type="radio" />male
        <input
          value='female'
          checked={gender == 'female' && true}
          onChange={(e) => setgender(e.target.value)}
          type="radio" />female
      </form>
      <br />
      <br />
      <br />
      <br />
      <select value={city} onChange={(e) => setcity(e.target.value)}>
        <option value="Bhopal">Bhopal</option>
        <option value="Jhansi">Jhansi</option>
        <option value="Lalitpur">Lalitpur</option>
        <option value="Sagar">Sagar </option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <button>Create todo list</button>
    </>
  )
}

export default App