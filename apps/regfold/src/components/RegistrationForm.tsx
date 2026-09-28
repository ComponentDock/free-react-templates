import { useState, type FormEvent } from 'react'

export function RegistrationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-brand-start to-brand-end px-4 py-12 font-sans">
      <div className="w-full max-w-[680px] rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Row 1: First Name + Last Name */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="min-w-[calc(50%-8px)] flex-1">
              <label htmlFor="first-name" className="mb-1 block text-sm font-medium text-label">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-[5px] border border-gray-300 bg-input-bg px-3 py-2 text-sm text-gray-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div className="min-w-[calc(50%-8px)] flex-1">
              <label htmlFor="last-name" className="mb-1 block text-sm font-medium text-label">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-[5px] border border-gray-300 bg-input-bg px-3 py-2 text-sm text-gray-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {/* Row 2: Birthday + Gender */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="min-w-[calc(50%-8px)] flex-1">
              <label htmlFor="birthday" className="mb-1 block text-sm font-medium text-label">
                Birthday
              </label>
              <input
                id="birthday"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full rounded-[5px] border border-gray-300 bg-input-bg px-3 py-2 text-sm text-gray-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div className="min-w-[calc(50%-8px)] flex-1">
              <label className="mb-1 block text-sm font-medium text-label">Gender</label>
              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-sm text-label">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    className="h-4 w-4 accent-accent"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2 text-sm text-label">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                    className="h-4 w-4 accent-accent"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Row 3: Email + Phone */}
          <div className="mb-4 flex flex-wrap gap-4">
            <div className="min-w-[calc(50%-8px)] flex-1">
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[5px] border border-gray-300 bg-input-bg px-3 py-2 text-sm text-gray-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div className="min-w-[calc(50%-8px)] flex-1">
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-label">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-[5px] border border-gray-300 bg-input-bg px-3 py-2 text-sm text-gray-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          {/* Row 4: Subject */}
          <div className="mb-6">
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-label">
              Subject
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-[5px] border border-gray-300 bg-input-bg px-3 py-2 text-sm text-gray-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="" disabled>
                Choose option
              </option>
              <option value="subject1">Subject 1</option>
              <option value="subject2">Subject 2</option>
              <option value="subject3">Subject 3</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="rounded-[5px] bg-accent px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
