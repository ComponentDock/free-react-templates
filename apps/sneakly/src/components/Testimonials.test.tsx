import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Our satisfied customer says' })).toBeInTheDocument()
    expect(screen.getByText('Garreth Smith')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
  })

  it('renders a circular photo with a gold quote badge', () => {
    const { container } = render(<Testimonials />)

    const avatar = container.querySelector('img.rounded-full')!
    expect(avatar).toHaveAttribute('alt', 'Garreth Smith')
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(1)
  })

  it('switches testimonial via the dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(screen.getByText('UI Designer')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Show testimonial 5' }))
    expect(screen.getByText('System Analyst')).toBeInTheDocument()
  })

  it('renders five dots', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('button', { name: /Show testimonial/ })).toHaveLength(5)
  })
})
