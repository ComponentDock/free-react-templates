import type { FormEvent } from 'react'

interface LoginFormProps {
  errors: { username?: string; password?: string }
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function LoginForm({ errors, onSubmit }: LoginFormProps) {
  return (
    <div
      className="w-1/2 max-md:w-full max-md:p-[150px_15px_40px_15px] max-lg:p-[100px_30px_40px_30px]"
      style={{ padding: '303px 65px 40px 65px' }}
    >
      <h2
        className="mb-8 w-full text-center font-poppins text-xl uppercase"
        style={{ color: '#555555', letterSpacing: '2px' }}
      >
        Account Login
      </h2>

      <form onSubmit={onSubmit} noValidate>
        <div className="mb-4 flex gap-4 max-md:flex-col max-md:gap-4">
          <div className="relative w-1/2 max-md:w-full">
            <input
              type="text"
              name="username"
              placeholder="User name"
              autoComplete="username"
              className="peer h-[55px] w-full border bg-transparent px-[25px] font-poppins text-[18px] outline-none transition-all duration-[0.4s]"
              style={{ borderColor: '#e6e6e6', color: '#666666' }}
            />
            <div
              className="pointer-events-none absolute inset-0 scale-110 border-2 border-transparent opacity-0 transition-all duration-[0.4s] peer-focus:scale-100 peer-focus:opacity-100"
              style={{ borderColor: '#00ad5f' }}
            />
            {errors.username && (
              <span
                className="absolute right-0 top-full mt-1 whitespace-nowrap border px-2 py-1 font-poppins text-[13px]"
                style={{ color: '#c80000', borderColor: '#c80000' }}
              >
                {errors.username}
              </span>
            )}
          </div>
          <div className="relative w-1/2 max-md:w-full">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              className="peer h-[55px] w-full border bg-transparent px-[25px] font-poppins text-[18px] outline-none transition-all duration-[0.4s]"
              style={{ borderColor: '#e6e6e6', color: '#666666' }}
            />
            <div
              className="pointer-events-none absolute inset-0 scale-110 border-2 border-transparent opacity-0 transition-all duration-[0.4s] peer-focus:scale-100 peer-focus:opacity-100"
              style={{ borderColor: '#00ad5f' }}
            />
            {errors.password && (
              <span
                className="absolute right-0 top-full mt-1 whitespace-nowrap border px-2 py-1 font-poppins text-[13px]"
                style={{ color: '#c80000', borderColor: '#c80000' }}
              >
                {errors.password}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mb-4 h-[50px] w-full cursor-pointer rounded-[3px] border-none font-bold font-montserrat text-xs uppercase text-white transition-colors duration-[0.4s] hover:bg-[#333]"
          style={{ backgroundColor: '#00ad5f', letterSpacing: '1px' }}
        >
          Sign In
        </button>

        <div className="mb-4 text-center font-poppins text-[13px]" style={{ color: '#999999' }}>
          Forgot{' '}
          <a
            href="#"
            className="transition-colors duration-[0.4s] hover:underline"
            style={{ color: '#00ad5f' }}
          >
            User name / password?
          </a>
        </div>

        <div
          className="text-center font-poppins text-[15px] uppercase"
          style={{ color: '#00ad5f' }}
        >
          <a href="#" className="transition-colors duration-[0.4s] hover:underline">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  )
}
