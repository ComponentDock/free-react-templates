import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, quick links, newsletter field, and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Taper/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByLabelText('Enter email address')).toBeInTheDocument()
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows contact details', () => {
    render(<Footer />)
    expect(screen.getByText('+564 7885 3222')).toBeInTheDocument()
    expect(screen.getByText('youremail@gmail.com')).toBeInTheDocument()
  })

  it('subscribes to the newsletter on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Enter email address'), 'barber@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
  })
})
