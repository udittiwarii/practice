const Read = (props) => {
    const users = props.users
    // const setusesrs = props.setusesrs
    console.log(props)
    const renderusers = users.map((user, index) => {
        return <li key={index}>{user.name}</li>
    })
    return (
        <>
            <div>User data</div>
            <ol>{renderusers}</ol>
        </>
    )
}

export default Read