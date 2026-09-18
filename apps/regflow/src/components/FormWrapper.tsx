import type { ReactNode } from 'react'

interface FormWrapperProps {
  children: ReactNode
}

export function FormWrapper({ children }: FormWrapperProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-12 max-md:bg-[#39459b]">
      {/* Background image overlay — uses a seeded picsum photo */}
      <div
        className="absolute inset-0 bg-cover bg-center max-md:hidden"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/regflow-bg/1920/1080)',
        }}
      />
      <div className="absolute inset-0 bg-black/40 max-md:hidden" />

      <div className="relative z-10 w-full max-w-[758px]">{children}</div>
    </div>
  )
}
