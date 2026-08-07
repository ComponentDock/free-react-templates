import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial with its author', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'My satisfied customer says' })).toBeInTheDocument()
    expect(screen.getByText('Garreth Smith')).toBeInTheDocument()
    expect(screen.getByText('Agent')).toBeInTheDocument()
  })

  it('shows the next testimonial when the next control is activated', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const firstQuote = screen.getByRole('blockquote').textContent
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('blockquote').textContent).not.toBe(firstQuote)
    expect(screen.getByText('Model')).toBeInTheDocument()
  })

  it('shows the previous testimonial when the previous control is activated', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Victoria Adams')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
  })

  it('wraps around to the first testimonial after the last one', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByRole('blockquote').textContent).toBe(
      screen.getAllByRole('blockquote')[0]!.textContent,
    )
    expect(screen.getByText('Agent')).toBeInTheDocument()
  })
})
