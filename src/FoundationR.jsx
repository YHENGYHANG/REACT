import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FoundationR() {
  const [form, setForm] = useState({ name: '', booth: '', email: '' });
  const [radioB, setRB] = useState('');
  const [dropL, setDrop] = useState('');
  const [errors, setErrors] = useState({});

  const navig = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleRadio(e) {
    setRB(e.target.value);
  }

  function handleDrop(e) {
    setDrop(e.target.value);
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.booth.trim()) newErrors.booth = 'Booth is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!radioB) newErrors.radio = 'Please select your sex.';
    if (!dropL) newErrors.course = 'Please select your course.';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload

    console.log('FOUNDATION DAY REGISTRATION:')
    console.log('Name: ', form.name)
    console.log('Booth: ', form.booth)
    console.log(`Sex: ${radioB}`)
    console.log(`Course: ${dropL}`)

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    alert('Registration Submitted!!')
    navig('/confirmation');
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Foundation Day Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Booth</label>
          <input
            type="text"
            name="booth"
            value={form.booth}
            onChange={handleChange}
            placeholder="Booth"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.booth && <p className="text-red-500 text-sm mt-1">{errors.booth}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Sex</span>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="radio"
                value="Male"
                checked={radioB === 'Male'}
                onChange={handleRadio}
              />
              Male
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="radio"
                name="radio"
                value="Female"
                checked={radioB === 'Female'}
                onChange={handleRadio}
              />
              Female
            </label>
          </div>
          {errors.radio && <p className="text-red-500 text-sm mt-1">{errors.radio}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
          <select
            id="course"
            value={dropL}
            onChange={handleDrop}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">--Course--</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
          </select>
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white font-medium px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default FoundationR
