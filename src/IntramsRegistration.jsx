import {useState} from "react";

function IntramsRegistration(){
    const [form, setForm] = useState({ name: '', sport: '' });
    const [radioB, setRB] = useState('');
    const [dropL, setDrop] = useState('');
    // const [error, setError] = useState('');


  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
  }
  function handleRadio(){
    setRB(event.target.value);
  }

  function handleDrop(){
    setDrop(event.target.value);
  }

  function handleSubmit(e) {
    alert('Registration Submitted!!')
    console.log('INTRAMURALS DAY REGISTRATION:')
    e.preventDefault(); // stop page reload
    console.log('Name: ', form.name)
    console.log('Sport: ', form.sport)
    console.log(`Sex: ${radioB}`)
    console.log(`Course: ${dropL}`)



    // if (!form.name.trim() || !form.sport.trim()) {
    //   setError('Name and Email are both required.');
    //   return;
    // }

//     setError('');
//     navigate('/thank-you');
  }

  return (
    <div>
      <h2>Intramurals Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        /> <br></br>

        <label>Sport: </label>
        <input
          type="text"
          name="sport"
          value={form.sport}
          onChange={handleChange}
          placeholder="Sport"
          required
        /><br></br>

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        /><br></br>

    <label>
        <input type="radio" 
        name="radio" 
        value="Male"
        checked={radioB==='Male'}
        onChange={handleRadio}
        />
        Male
    </label>
    
    <label>
        <input type="radio" 
        name="radio" 
        value="Female"
        checked={radioB==='Female'}
        onChange={handleRadio}
        />
        Female
    </label>


      <select id="course" value={dropL} onChange={handleDrop}>
        <option value="default">--Course--</option>
        <option value="BSIT">BSIT</option>
        <option value="BSCS">BSCS</option>
      </select>


        <br></br>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}export default IntramsRegistration