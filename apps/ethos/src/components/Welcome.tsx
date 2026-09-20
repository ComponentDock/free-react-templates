import { Button } from '@free-react-templates/ui'

export function Welcome() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row sm:px-6">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/ethos-welcome/600/400"
            alt="Students studying together"
            className="w-full rounded shadow-md"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Ethos</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button className="mt-6 rounded-none bg-brand-400 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-500">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
