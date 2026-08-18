import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the heading, both quote slides, founders and the tall photo', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: TESTIMONIALS.heading }),
    ).toBeInTheDocument()

    for (const slide of TESTIMONIALS.slides) {
      expect(screen.getByText(slide.quote)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: slide.name })).toBeInTheDocument()
      expect(screen.getByText(slide.role)).toBeInTheDocument()
    }

    const photo = screen.getByRole('img', { name: TESTIMONIALS.imageAlt })
    expect(photo).toHaveAttribute('src', TESTIMONIALS.image)
    expect(photo).toHaveClass('md:h-[766px]')
  })

  it('advances and wraps the quote carousel via arrows', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const track = screen.getByTestId('quotes-track')
    expect(track.style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track.style.transform).toBe('translateX(-100%)')

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    // wraps back to the first slide
    expect(track.style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track.style.transform).toBe('translateX(-100%)')
  })
})
