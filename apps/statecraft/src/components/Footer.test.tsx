import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, newsletter form and Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Strategy & Transformation')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('shows a success message after subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe to newsletter' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
