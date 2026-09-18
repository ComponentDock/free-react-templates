import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface AddListingProps {
  className?: string
}

export function AddListing({ className }: AddListingProps) {
  return (
    <section className={cn('py-[90px] max-md:py-[45px] bg-light-bg', className)}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-heading text-[47px] max-md:text-[34px] font-light mb-4">
          Reach millions of People
        </h2>
        <p className="text-body text-[15px] mb-8 max-w-[500px] mx-auto">
          Add your Business in front of millions and earn 3x profits from our listing
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 font-normal hover:bg-primary-hover transition-colors no-underline"
        >
          <Plus size={16} />
          ADD LISTING
        </a>
      </div>
    </section>
  )
}
