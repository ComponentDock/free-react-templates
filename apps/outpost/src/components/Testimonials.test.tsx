import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first slide with quote icon, name, five stars and the quote', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 4, name: 'Fanny Spencer' })).toBeInTheDocument()
    expect(screen.getByLabelText('Rated five out of five').querySelectorAll('svg')).toHaveLength(5)
    expect(screen.getByTestId('testimonial-quote')).toHaveTextContent('As conscious traveling')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders three circular avatar thumbnails with the pink ring on the active one', () => {
    const { container } = render(<Testimonials />)

    const thumbs = screen.getAllByRole('button')
    expect(thumbs).toHaveLength(3)
    expect(thumbs[0]).toHaveAttribute('aria-current', 'true')
    expect(thumbs[0]).toHaveClass('rounded-full', 'border-2', 'border-brand')
    expect(thumbs[1]).toHaveAttribute('aria-current', 'false')
    expect(thumbs[1]).toHaveClass('border-transparent', 'hover:border-brand')

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/outpost-testi-1/140/140',
    )
  })

  it('switches slides from a thumbnail and moves the ring with it', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial from Ethel Davis' }))
    expect(screen.getByRole('heading', { level: 4, name: 'Ethel Davis' })).toBeInTheDocument()
    expect(screen.getByTestId('testimonial-quote')).toHaveTextContent('reshuffled the whole ridge')

    const thumbs = screen.getAllByRole('button')
    expect(thumbs[1]).toHaveAttribute('aria-current', 'true')
    expect(thumbs[0]).toHaveAttribute('aria-current', 'false')

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial from Randy Weaver' }))
    expect(screen.getByRole('heading', { level: 4, name: 'Randy Weaver' })).toBeInTheDocument()
    expect(screen.getByTestId('testimonial-quote')).toHaveTextContent('Ten days in the desert')
  })
})
