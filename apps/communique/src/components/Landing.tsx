import { Button } from '@free-react-templates/ui'
import { MessageSquare } from 'lucide-react'

interface LandingProps {
  onOpenModal: () => void
}

export function Landing({ onOpenModal }: LandingProps) {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-olive/10 px-4 py-2 text-sm font-medium text-olive dark:bg-olive/20">
          <MessageSquare className="h-4 w-4" />
          Free Consultation
        </div>
        <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
          Communique
        </h1>
        <p className="mb-8 max-w-lg text-lg text-gray-600 dark:text-gray-400">
          Book your free consultation today. Our experts are ready to help you achieve your goals.
        </p>
        <Button size="lg" onClick={onOpenModal}>
          Launch Modal
        </Button>
      </div>
    </section>
  )
}
