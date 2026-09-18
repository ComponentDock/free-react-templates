import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="relative bg-ink py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/shores-cta/1920/600)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Become a volunteer</h2>
        <p className="mb-8 text-gray-300">
          Join our global network of volunteers making a real difference. Your time and skills can
          transform communities and change lives around the world.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-accent bg-accent text-ink hover:bg-accent-hover"
        >
          Join with us
        </Button>
      </div>
    </section>
  )
}
