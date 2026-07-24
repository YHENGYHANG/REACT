import {useState} from 'react'

function AttendanceCounter() {
    const [count, setCount] = useState(0);

    const MarkPresent = () => setCount(count + 1);
    const Undo = () => setCount(count > 0 ? count - 1 : count);
    const Reset = () => setCount(0);


    return(
        <div>
            <h2>Task 3:</h2>
            <h3>Attendance Counter</h3>
            <p>Present Count: {count}</p>
            <button onClick={MarkPresent}>Mark Present</button>
            <button onClick={Undo}>Undo</button>
            <button onClick={Reset}>Reset</button>
            <br></br>

        </div>
    )
}
export default AttendanceCounter