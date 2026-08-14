import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the four widgets and the Component Dock credit', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Hostelry', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Footer navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'InstaFeed', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More templates at Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders social links with accessible labels', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('shows an error for an invalid newsletter email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Email address'), '@example.com')
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  })

  it('confirms a valid newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'guest@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
  })
})
