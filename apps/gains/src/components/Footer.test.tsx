import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four widget columns and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Important Link' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Newsletter' })).toBeInTheDocument()

    const dockLink = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Gains on social media' })).toHaveLength(4)
  })

  it('blocks an invalid newsletter email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Newsletter email'), 'nope')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
  })

  it('shows a confirmation on a valid newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Newsletter email'), 'news@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing!/)
    expect(screen.queryByRole('button', { name: 'Subscribe' })).not.toBeInTheDocument()
  })
})
