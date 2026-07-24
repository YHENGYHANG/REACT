function StudentCard(props) {


    return(
        <div>
            <h2>Task 2:</h2>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Course: {props.course}</h3>
            <h3>Status: {props.status ? "Regular Student" : "Irregular Student"}</h3>
            <br></br>
        </div>
    )
}
export default StudentCard