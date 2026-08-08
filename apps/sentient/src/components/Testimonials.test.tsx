import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

const FIRST_QUOTE = /transformed our clinical documentation workflows/i
const SECOND_QUOTE = /cut our fraud detection time/i
const THIRD_QUOTE = /recommendation engine/i

describe('Testimonials', () => {
  it('renders the heading, first slide, navigation controls and slide dots', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Trusted by AI-first teams' }),
    ).toBeInTheDocument()

    expect(screen.getByText(FIRST_QUOTE)).toBeInTheDocument()
    expect(screen.getByText('Dr. Sarah Chen')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()

    for (let i = 1; i <= 6; i += 1) {
      expect(screen.getByRole('button', { name: `Go to slide ${i}` })).toBeInTheDocument()
    }
  })

  it('advances to the following testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(SECOND_QUOTE)).toBeInTheDocument()
    expect(screen.queryByText(FIRST_QUOTE)).not.toBeInTheDocument()

    for (let i = 0; i < 5; i += 1) {
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getByText(FIRST_QUOTE)).toBeInTheDocument()
  })

  it('moves to the previous testimonial and wraps backwards', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/manufacturing yield analytics/i)).toBeInTheDocument()
  })

  it('jumps to a slide when its dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText(THIRD_QUOTE)).toBeInTheDocument()
  })
})
