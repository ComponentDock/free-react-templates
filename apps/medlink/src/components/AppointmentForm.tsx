import { useState } from 'react'
import { Send } from 'lucide-react'

const diseaseTypes = [
  'General Checkup',
  'Cardiology',
  'Dermatology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Other',
]

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    diseaseType: '',
    appointmentDate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div id="appointment" className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-[#333333]">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="patientName" className="mb-1 block text-sm font-medium text-[#333333]">
            Patient Name
          </label>
          <input
            id="patientName"
            name="patientName"
            type="text"
            required
            value={formData.patientName}
            onChange={handleChange}
            className="w-full rounded border border-[#e5e5e5] px-4 py-2.5 text-sm text-[#333333] focus:border-[#76b900] focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#333333]">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded border border-[#e5e5e5] px-4 py-2.5 text-sm text-[#333333] focus:border-[#76b900] focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#333333]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border border-[#e5e5e5] px-4 py-2.5 text-sm text-[#333333] focus:border-[#76b900] focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="mb-1 block text-sm font-medium text-[#333333]">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            required
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full rounded border border-[#e5e5e5] px-4 py-2.5 text-sm text-[#333333] focus:border-[#76b900] focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
        </div>
        <div>
          <label htmlFor="diseaseType" className="mb-1 block text-sm font-medium text-[#333333]">
            Disease Type
          </label>
          <select
            id="diseaseType"
            name="diseaseType"
            required
            value={formData.diseaseType}
            onChange={handleChange}
            className="w-full rounded border border-[#e5e5e5] px-4 py-2.5 text-sm text-[#333333] focus:border-[#76b900] focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          >
            <option value="">Select disease type</option>
            {diseaseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="appointmentDate"
            className="mb-1 block text-sm font-medium text-[#333333]"
          >
            Appointment Date
          </label>
          <input
            id="appointmentDate"
            name="appointmentDate"
            type="date"
            required
            value={formData.appointmentDate}
            onChange={handleChange}
            className="w-full rounded border border-[#e5e5e5] px-4 py-2.5 text-sm text-[#333333] focus:border-[#76b900] focus:outline-none focus:ring-1 focus:ring-[#76b900]"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded bg-[#76b900] px-8 py-3 text-sm font-semibold text-white uppercase tracking-wide hover:bg-[#5a8f00] transition-colors"
        >
          Submit
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}
