import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestimonialCarousel, type Testimonial } from './TestimonialCarousel'

const mockTestimonials: Testimonial[] = [
  {
    image: 'https://picsum.photos/seed/test-1/800/600',
    quote: 'First testimonial quote here.',
    author: 'Alice Smith',
  },
  {
    image: 'https://picsum.photos/seed/test-2/800/600',
    quote: 'Second testimonial quote here.',
    author: 'Bob Jones',
  },
  {
    image: 'https://picsum.photos/seed/test-3/800/600',
    quote: 'Third testimonial quote here.',
    author: 'Carol White',
  },
]

describe('TestimonialCarousel', () => {
  it('renders the heading and first testimonial by default', () => {
    render(<TestimonialCarousel testimonials={mockTestimonials} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
    expect(screen.getByText(/First testimonial quote here/)).toBeInTheDocument()
    expect(screen.getByText(/Alice Smith/)).toBeInTheDocument()
  })

  it('navigates to the next testimonial on next click', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel testimonials={mockTestimonials} />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Second testimonial quote here/)).toBeInTheDocument()
    expect(screen.getByText(/Bob Jones/)).toBeInTheDocument()
  })

  it('navigates to the previous testimonial on prev click', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel testimonials={mockTestimonials} />)

    // Go to second slide first, then prev goes back to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Second testimonial/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/First testimonial quote here/)).toBeInTheDocument()
  })

  it('wraps from first to last on prev click', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel testimonials={mockTestimonials} />)

    // From first slide, prev goes to last
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Third testimonial quote here/)).toBeInTheDocument()
    expect(screen.getByText(/Carol White/)).toBeInTheDocument()
  })

  it('navigates via pagination dots', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel testimonials={mockTestimonials} />)

    const dot = screen.getByRole('button', { name: 'Go to testimonial 3' })
    await user.click(dot)
    expect(screen.getByText(/Third testimonial quote here/)).toBeInTheDocument()
    expect(dot).toHaveAttribute('aria-current', 'true')
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<TestimonialCarousel testimonials={mockTestimonials} />)

    // Go to last slide first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Third testimonial/)).toBeInTheDocument()

    // Next wraps to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/First testimonial/)).toBeInTheDocument()
  })

  it('renders image with correct aria-label', () => {
    render(<TestimonialCarousel testimonials={mockTestimonials} />)

    expect(screen.getByRole('img', { name: 'Photo of Alice Smith' })).toBeInTheDocument()
  })

  it('uses default testimonials when none provided', () => {
    render(<TestimonialCarousel />)

    expect(screen.getAllByText(/Lorem ipsum/).length).toBe(2)
  })
})
