import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('shows one testimonial at a time with a quote and a Name — Role attribution', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
    const cite = container.querySelector('cite')
    expect(cite).toHaveTextContent(testimonials[0]!.name)
    expect(cite).toHaveTextContent('CEO and Co-Founder')
    expect(container.querySelectorAll('blockquote')).toHaveLength(3)
  })

  it('advances to the next testimonial and wraps back to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[1]!.quote)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[2]!.quote)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials[2]!.quote)).toBeInTheDocument()
  })
})
