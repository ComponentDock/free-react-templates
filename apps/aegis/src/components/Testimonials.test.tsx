import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first page of quotes', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Trusted by Security Leaders' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Marcus Chen')).toBeInTheDocument()
    expect(screen.getByText('Sarah Blackwell')).toBeInTheDocument()
    expect(screen.getByText('James Okafor')).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: '5 out of 5 stars' })).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Go to testimonial slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cycles forward through the quote pages and wraps to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(screen.getByText('Elena Petrova')).toBeInTheDocument()
    expect(screen.queryByText('Marcus Chen')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(screen.getByText('Rachel Torres')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial slide 4' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(screen.getByText('Marcus Chen')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps backward from the first page to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonials' }))
    expect(screen.getByText('Rachel Torres')).toBeInTheDocument()
    expect(screen.queryByText('Marcus Chen')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial slide 4' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide via the indicator dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial slide 3' }))
    expect(screen.getByText('David Kim')).toBeInTheDocument()
    expect(screen.queryByText('Marcus Chen')).not.toBeInTheDocument()
  })
})
