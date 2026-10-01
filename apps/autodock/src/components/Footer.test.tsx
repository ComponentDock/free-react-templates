import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three footer columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get in Touch' })).toBeInTheDocument()
    expect(screen.getByText('800/8, Kazipara, Dhaka')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /show location/i })).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'driver@example.com')
    expect(input).toHaveValue('driver@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('form', { name: 'Newsletter signup' })).toBeInTheDocument()
  })
})
