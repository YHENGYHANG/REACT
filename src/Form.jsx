import { useState } from "react";
function Form(){
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[agreed, setAgreed] = useState(Boolean);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(agreed) return;
        console.log ({userName, email});
    }

    return(
        <form onSubmit={handleSubmit} > 
        <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="username"></input>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email"></input>
        <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="username"></input>
        </form>
    )
}export default Form;