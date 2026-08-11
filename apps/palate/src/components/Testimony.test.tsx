import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimony } from './Testimony'
import { TESTIMONIALS, TESTIMONY_POSITION } from '../data'

describe('Testimony', () => {
  it('shows one testimonial at a time with avatar, quote and position', () => {
    const { container } = render(<Testimony />)

    expect(screen.getByRole('heading', { level: 2, name: 'Happy Customer' })).toBeInTheDocument()
    expect(container.querySelector('.font-script')).toHaveTextContent('Testimony')

    const first = TESTIMONIALS[0]!
    expect(screen.getByText(first.name)).toBeInTheDocument()
    // All five figures stay in the DOM (hidden ones display:none).
    expect(screen.getAllByText(TESTIMONY_POSITION)).toHaveLength(5)
    expect(screen.getByText(`“${first.quote}”`)).toBeInTheDocument()

    // Exactly one figure visible; the other four are hidden.
    const figures = container.querySelectorAll('figure')
    expect(figures).toHaveLength(5)
    const visible = [...figures].filter((figure) => figure.className.includes('block'))
    expect(visible).toHaveLength(1)

    // Dot indicators.
    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(5)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })

  it('navigates with prev/next controls, wrapping around', () => {
    render(<Testimony />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1]!.name)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()

    // Wraps backward from the first slide to the last.
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[4]!.name)).toBeInTheDocument()

    // Wraps forward from the last slide to the first.
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()
  })

  it('jumps to a testimonial via its dot', () => {
    render(<Testimony />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 4' }))
    expect(screen.getByText(TESTIMONIALS[3]!.name)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 4' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
