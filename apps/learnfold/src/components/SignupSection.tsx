import { useState } from 'react'

export function SignupSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [fileName, setFileName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name ?? '')
  }

  return (
    <section className="bg-brand">
      <div className="grid md:grid-cols-2">
        {/* Form side */}
        <div className="flex items-center px-8 py-24 lg:px-16">
          <div className="w-full max-w-md">
            <h2 className="mb-3 text-3xl font-bold text-white">Sign up to became a teacher</h2>
            <p className="mb-8 text-sm text-gray-200">
              Share your expertise with thousands of students worldwide. Upload your course and
              start teaching today.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 text-sm"
                aria-label="Your Name"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm"
                aria-label="Your E-mail"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 text-sm"
                aria-label="Your Phone"
              />
              <div>
                <label
                  htmlFor="file-upload"
                  className="inline-block cursor-pointer bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-gray-100"
                >
                  {fileName || 'Upload Course'}
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                Submit Course
              </button>
            </form>
          </div>
        </div>

        {/* Image side */}
        <div
          className="hidden min-h-[400px] bg-cover bg-center md:block"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/learnfold-signup/800/600)',
          }}
        />
      </div>
    </section>
  )
}
