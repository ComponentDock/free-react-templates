import { Button } from '@free-react-templates/ui'
import { Shield } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-br-[50%] bg-brand-light pb-20 pt-16 lg:pb-28 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-black leading-tight text-brand lg:text-5xl">
              Stay Safe.
              <br />
              Stay Home.
            </h1>
            <p className="mt-4 text-lg text-mist">
              Learn how to protect yourself and your loved ones during a pandemic. Prevention is the
              best medicine.
            </p>
            <Button className="mt-6 rounded-full px-8 py-3 text-sm font-bold">
              How to prevent
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-brand/10 lg:h-64 lg:w-64">
              <Shield className="h-24 w-24 text-brand lg:h-32 lg:w-32" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
