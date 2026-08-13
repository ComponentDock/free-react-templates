import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three columns, social icons, and the Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()

    for (const name of ['facebook', 'twitter', 'dribbble', 'behance']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('rejects an invalid newsletter email with an error message', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.queryByText('Thanks for subscribing!')).not.toBeInTheDocument()
  })

  it('shows a success state for a valid newsletter email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })
})
