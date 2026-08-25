import {useState} from "react";

function BuwanR(){
    const [form, setForm] = useState({ name: '', Events: '' });
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

    e.preventDefault(); // stop page reload
    console.log('FOUNDATION DAY REGISTRATION:')
    console.log('Name: ', form.name)
    console.log('Event: ', form.Events)
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
      <h2>Foundation Day Registration</h2>
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
        <label>Event: </label>
        <input
          type="text"
          name="Events"
          value={form.Events}
          onChange={handleChange}
          placeholder="Event"
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
        required
        />
        Male
    </label>

    <label>
        <input type="radio" 
        name="radio" 
        value="Female"
        checked={radioB==='Female'}
        onChange={handleRadio}
        required
        />
        Female
    </label>
        <br></br>

    <select id="course" value={dropL} onChange={handleDrop} required>
        <option value="">--Course--</option>
        <option value="BSIT">BSIT</option>
        <option value="BSCS">BSCS</option>
    </select>

        <button type="submit">Submit</button>
      </form>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
    </div>
  );
}export default BuwanR