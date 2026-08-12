import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the first slide with five stars and a quote', () => {
    const { container } = render(<Testimonials />)
    expect(screen.getByText(TESTIMONIALS[0].name)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0].quote)).toBeInTheDocument()
    expect(container.querySelectorAll('[aria-label="5 star rating"] svg')).toHaveLength(5)
  })

  it('navigates with next/prev controls and dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: /next testimonial/i })
    const prev = screen.getByRole('button', { name: /previous testimonial/i })

    await user.click(next)
    expect(screen.getByText(TESTIMONIALS[1].name)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[1].quote)).toBeInTheDocument()

    await user.click(prev)
    expect(screen.getByText(TESTIMONIALS[0].quote)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /go to slide 3/i }))
    expect(screen.getByText(TESTIMONIALS[2].quote)).toBeInTheDocument()
  })
})
