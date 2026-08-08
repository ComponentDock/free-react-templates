import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

const firstQuote = /I found my dream job as a Senior Engineer/
const secondQuote = /Jobfield has transformed our recruitment process/
const thirdQuote = /The salary transparency and honest job descriptions/
const fourthQuote = /As a hiring manager, I love how easy it is/

describe('Testimonials', () => {
  it('renders the heading, stars and the first testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Success Stories' })).toBeInTheDocument()
    expect(screen.getByLabelText('Rated 5 out of 5')).toBeInTheDocument()
    expect(screen.getByText(firstQuote)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Senior Engineer, TechFlow')).toBeInTheDocument()
  })

  it('moves to the next testimonial with the next button', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(secondQuote)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(thirdQuote)).toBeInTheDocument()
  })

  it('wraps around when navigating past the last testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(fourthQuote)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(firstQuote)).toBeInTheDocument()
  })

  it('jumps to a specific slide via the indicator dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByText(thirdQuote)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('renders all four slide indicator dots', () => {
    render(<Testimonials />)

    for (const label of ['Go to slide 1', 'Go to slide 2', 'Go to slide 3', 'Go to slide 4']) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
  })
})
