import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the About Me widget with a description', () => {
    render(<Footer />)

    expect(screen.getByText(/neighborhood barbershop with old-school craft/i)).toBeInTheDocument()
  })

  it('shows the Newsletter widget and rejects an empty submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter your email address')).toBeInTheDocument()
  })

  it('confirms a successful newsletter subscription and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'client@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('shows the Follow Me widget with social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Follow Me' })).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the copyright bar', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Tonsor — Free React Template`)).toBeInTheDocument()
  })
})
