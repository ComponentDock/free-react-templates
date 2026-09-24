import type { FormEvent } from 'react'

interface LoginFormProps {
  errors: { email?: string; password?: string }
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  rememberMe: boolean
  onRememberMeChange: (v: boolean) => void
}

export function LoginForm({ errors, onSubmit, rememberMe, onRememberMeChange }: LoginFormProps) {
  return (
    <div
      className="w-[560px] max-md:w-full max-md:p-[150px_15px_40px_15px] max-lg:p-[100px_30px_40px_30px]"
      style={{ backgroundColor: '#f7f7f7', padding: '173px 55px 55px 55px' }}
    >
      <h2
        className="mb-8 w-full text-center font-poppins text-[30px]"
        style={{ color: '#333333', lineHeight: '1.2' }}
      >
        Login to continue
      </h2>

      <form onSubmit={onSubmit} noValidate>
        {/* Email */}
        <div
          className="relative mb-[10px] flex h-[80px] w-full flex-wrap items-end rounded-[10px] border"
          style={{ borderColor: '#e6e6e6' }}
        >
          <input
            type="text"
            name="email"
            autoComplete="email"
            aria-label="Email"
            className="peer h-full w-full bg-transparent px-[26px] font-montserrat text-[18px] outline-none transition-all duration-[0.4s]"
            style={{ color: '#555555' }}
            placeholder=" "
          />
          <div
            className="pointer-events-none absolute inset-0 scale-x-[1.1] scale-y-[1.3] rounded-[10px] border opacity-0 transition-all duration-[0.4s] peer-focus:scale-100 peer-focus:opacity-100"
            style={{ borderColor: '#6675df' }}
          />
          <label
            className="pointer-events-none absolute left-0 top-[30px] w-full pl-6 font-montserrat text-[18px] transition-all duration-[0.4s] peer-focus:top-[14px] peer-focus:text-[13px] peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:text-[13px]"
            style={{ color: '#999999' }}
          >
            Email
          </label>
          {errors.email && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border px-2.5 py-1 font-poppins text-[13px]"
              style={{ color: '#c80000', borderColor: '#c80000', backgroundColor: '#fff' }}
            >
              {errors.email}
            </span>
          )}
        </div>

        {/* Password */}
        <div
          className="relative mb-[10px] flex h-[80px] w-full flex-wrap items-end rounded-[10px] border"
          style={{ borderColor: '#e6e6e6' }}
        >
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            aria-label="Password"
            className="peer h-full w-full bg-transparent px-[26px] font-montserrat text-[18px] outline-none transition-all duration-[0.4s]"
            style={{ color: '#555555' }}
            placeholder=" "
          />
          <div
            className="pointer-events-none absolute inset-0 scale-x-[1.1] scale-y-[1.3] rounded-[10px] border opacity-0 transition-all duration-[0.4s] peer-focus:scale-100 peer-focus:opacity-100"
            style={{ borderColor: '#6675df' }}
          />
          <label
            className="pointer-events-none absolute left-0 top-[30px] w-full pl-6 font-montserrat text-[18px] transition-all duration-[0.4s] peer-focus:top-[14px] peer-focus:text-[13px] peer-[:not(:placeholder-shown)]:top-[14px] peer-[:not(:placeholder-shown)]:text-[13px]"
            style={{ color: '#999999' }}
          >
            Password
          </label>
          {errors.password && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border px-2.5 py-1 font-poppins text-[13px]"
              style={{ color: '#c80000', borderColor: '#c80000', backgroundColor: '#fff' }}
            >
              {errors.password}
            </span>
          )}
        </div>

        {/* Remember me + Forgot */}
        <div className="flex w-full justify-between py-3">
          <label
            className="relative cursor-pointer pl-[26px] font-poppins text-[13px]"
            style={{ color: '#999999' }}
          >
            <input
              type="checkbox"
              name="remember-me"
              className="peer sr-only"
              checked={rememberMe}
              onChange={(e) => onRememberMeChange(e.target.checked)}
            />
            <span
              className="absolute left-0 top-1/2 flex h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-sm border bg-white font-awesome text-[13px] transition-colors duration-[0.4s] peer-checked:border-brand peer-checked:text-brand"
              style={{ borderColor: '#6675df' }}
            />
            Remember me
          </label>
          <a
            href="#"
            className="font-montserrat text-[13px] transition-colors duration-[0.4s] hover:underline"
            style={{ color: '#555555' }}
          >
            Forgot Password?
          </a>
        </div>

        {/* Login button */}
        <div className="flex w-full flex-wrap justify-center">
          <button
            type="submit"
            className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[10px] border-none font-montserrat text-[12px] font-bold uppercase text-white transition-all duration-[0.4s] hover:bg-[#333333]"
            style={{ backgroundColor: '#6675df', letterSpacing: '1px' }}
          >
            Login
          </button>
        </div>

        {/* Social section */}
        <div className="py-5 text-center font-montserrat text-[13px]" style={{ color: '#999999' }}>
          or sign up using
        </div>
        <div className="flex justify-center gap-2">
          <a
            href="#"
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full text-[18px] text-white transition-all duration-[0.4s] hover:bg-[#333333]"
            style={{ backgroundColor: '#3b5998' }}
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="#"
            className="flex h-[36px] w-[36px] items-center justify-center rounded-full text-[18px] text-white transition-all duration-[0.4s] hover:bg-[#333333]"
            style={{ backgroundColor: '#1da1f2' }}
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
      </form>
    </div>
  )
}
