import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    gender: '',
    className: '',
    regCode: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <h2 className="mb-[37px] text-[30px] font-bold uppercase text-text-input">
        Registration Info
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8 border-b border-border-input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2.5 text-base font-medium text-text-input placeholder:text-text-placeholder"
          />
        </div>
        <div className="mb-8 flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex-1 border-b border-border-input">
            <input
              type="text"
              name="birthdate"
              placeholder="Birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full py-2.5 text-base font-medium text-text-input placeholder:text-text-placeholder"
            />
          </div>
          <div className="flex-1 border-b border-border-input">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full cursor-pointer appearance-none bg-transparent py-2.5 text-base font-medium text-text-placeholder"
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-8 border-b border-border-input">
          <select
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="w-full cursor-pointer appearance-none bg-transparent py-2.5 text-base font-medium text-text-placeholder"
          >
            <option value="" disabled>
              Class
            </option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
          </select>
        </div>
        <div className="mb-8 flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex-1 border-b border-border-input">
            <input
              type="text"
              name="regCode"
              placeholder="Registration Code"
              value={formData.regCode}
              onChange={handleChange}
              className="w-full py-2.5 text-base font-medium text-text-input placeholder:text-text-placeholder"
            />
          </div>
        </div>
        <div className="pt-[30px]">
          <button
            type="submit"
            className="cursor-pointer rounded-[3px] bg-brand px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
