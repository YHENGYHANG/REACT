import { useState } from "react";
function Intrams(){
  const [form, setForm] = useState({email: '', password: ''});

  function handleChange(e){
    const {name, value} = e.target;
    setForm(Form => ({...Form, [name]: value}));
  }

    function handleSubmit(e){
      alert('Registration Successful!')

      e.preventDefault();
      console.log('Email:', form.email);
      console.log('Password:', form.password);
    }


  return(
    <div>
    <h4>Intramurals Registration:</h4>

    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        value={form.name} 
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input 
        type="text" 
        name="sport"
        value={form.sport} 
        onChange={handleChange}
        placeholder="Sport"
        required
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );


}export default Intrams