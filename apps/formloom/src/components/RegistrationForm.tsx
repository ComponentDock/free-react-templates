import { type FormEvent, useState } from 'react'

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [gender, setGender] = useState('male')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
    setGender('male')
  }

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-[#2d2d2d] px-4 py-12 dark:bg-gray-900">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-gray-800">
        {/* Left side — image */}
        <div className="hidden w-1/2 md:block">
          <img
            src="https://picsum.photos/seed/formloom-students/800/600"
            alt="Students collaborating with a tablet"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side — form */}
        <div className="w-full p-8 md:w-1/2 md:p-10">
          <h1 className="mb-8 text-xl font-bold tracking-wide text-gray-900 uppercase dark:text-white">
            Student Registration Form
          </h1>

          {submitted ? (
            <div className="space-y-4">
              <p className="rounded bg-accent/10 p-4 text-center text-sm text-green-700 dark:text-green-400">
                Registration submitted successfully!
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Father Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Name :
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="father-name"
                    className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Father Name :
                  </label>
                  <input
                    id="father-name"
                    name="fatherName"
                    type="text"
                    className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Address :
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Gender */}
              <div>
                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Gender :
                  </legend>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                        className="accent-accent"
                      />
                      Male
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                        className="accent-accent"
                      />
                      Female
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* State + City */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="state"
                    className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    State :
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select...</option>
                    <option value="california">California</option>
                    <option value="texas">Texas</option>
                    <option value="new-york">New York</option>
                    <option value="florida">Florida</option>
                    <option value="illinois">Illinois</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    City :
                  </label>
                  <select
                    id="city"
                    name="city"
                    className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select...</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="san-francisco">San Francisco</option>
                    <option value="san-diego">San Diego</option>
                    <option value="sacramento">Sacramento</option>
                  </select>
                </div>
              </div>

              {/* DOB */}
              <div>
                <label
                  htmlFor="dob"
                  className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  DOB :
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Pincode */}
              <div>
                <label
                  htmlFor="pincode"
                  className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Pincode :
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Course */}
              <div>
                <label
                  htmlFor="course"
                  className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Course :
                </label>
                <select
                  id="course"
                  name="course"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select...</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business Administration</option>
                  <option value="arts">Liberal Arts</option>
                  <option value="medicine">Medicine</option>
                </select>
              </div>

              {/* Email ID */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Email ID :
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 bg-transparent px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-accent dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded border border-gray-300 bg-gray-100 px-6 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  Reset All
                </button>
                <button
                  type="submit"
                  className="rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Submit Form
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
