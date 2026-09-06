import { Button } from '@free-react-templates/ui'

interface LandingProps {
  onOpenModal: () => void
}

export function Landing({ onOpenModal }: LandingProps) {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Snowdrift
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          A winter sale modal popup for your next project.
        </p>
        <Button size="lg" onClick={onOpenModal}>
          Launch Sale
        </Button>
      </div>
    </section>
  )
}
