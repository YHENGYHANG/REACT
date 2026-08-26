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
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    alert('Registration Submitted!!')
    navig('/confirmation');
  }

  return (
    <div className="ticket-card px-8 py-10 sm:px-12 sm:py-12 max-w-xl mx-auto">
      <p className="eyebrow mb-2">Registration Form</p>
      <h2 className="font-display text-3xl font-semibold text-ink mb-8">
        Foundation Day
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label className="block eyebrow mb-2 text-ink/60">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Juan Dela Cruz"
            className="w-full bg-transparent border-b-2 border-line px-1 py-2 text-ink placeholder:text-ink/30 focus:outline-none focus:border-maroon transition-colors"
          />
          {errors.name && <p className="text-maroon text-sm mt-1.5">{errors.name}</p>}
        </div>

        <div>
          <label className="block eyebrow mb-2 text-ink/60">Booth</label>
          <input
            type="text"
            name="booth"
            value={form.booth}
            onChange={handleChange}
            placeholder="e.g. BSIT Food Booth"
            className="w-full bg-transparent border-b-2 border-line px-1 py-2 text-ink placeholder:text-ink/30 focus:outline-none focus:border-maroon transition-colors"
          />
          {errors.booth && <p className="text-maroon text-sm mt-1.5">{errors.booth}</p>}
        </div>

        <div>
          <label className="block eyebrow mb-2 text-ink/60">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-transparent border-b-2 border-line px-1 py-2 text-ink placeholder:text-ink/30 focus:outline-none focus:border-maroon transition-colors"
          />
          {errors.email && <p className="text-maroon text-sm mt-1.5">{errors.email}</p>}
        </div>

        <div>
          <span className="block eyebrow mb-2 text-ink/60">Sex</span>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-ink">
              <input
                type="radio"
                name="radio"
                value="Male"
                checked={radioB === 'Male'}
                onChange={handleRadio}
                className="accent-maroon"
              />
              Male
            </label>
            <label className="flex items-center gap-2 text-ink">
              <input
                type="radio"
                name="radio"
                value="Female"
                checked={radioB === 'Female'}
                onChange={handleRadio}
                className="accent-maroon"
              />
              Female
            </label>
          </div>
          {errors.radio && <p className="text-maroon text-sm mt-1.5">{errors.radio}</p>}
        </div>

        <div>
          <label className="block eyebrow mb-2 text-ink/60">Course</label>
          <select
            id="course"
            value={dropL}
            onChange={handleDrop}
            className="w-full bg-transparent border-b-2 border-line px-1 py-2 text-ink focus:outline-none focus:border-maroon transition-colors"
          >
            <option value="">Choose a course</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
          </select>
          {errors.course && <p className="text-maroon text-sm mt-1.5">{errors.course}</p>}
        </div>

        <div className="ticket-divider my-8 mx-0" />

        <button
          type="submit"
          className="w-full bg-maroon text-paper font-medium px-5 py-3 rounded-sm hover:bg-maroon-dark transition-colors"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}
export default FoundationR
