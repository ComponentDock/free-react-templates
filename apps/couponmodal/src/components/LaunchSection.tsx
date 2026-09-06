import { Button } from '@free-react-templates/ui'

interface LaunchSectionProps {
  onOpenModal: () => void
}

export function LaunchSection({ onOpenModal }: LaunchSectionProps) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-24">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          CouponModal
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          A coupon discount popup for your next project.
        </p>
        <Button size="lg" onClick={onOpenModal}>
          Launch CouponModal
        </Button>
      </div>
    </section>
  )
}
