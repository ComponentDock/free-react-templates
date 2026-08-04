import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the about blurb, quick links, follow us column, and newsletter form', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Doctor' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders the social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
  })

  it('subscribes with the entered email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'friend@example.com')
    expect(input).toHaveValue('friend@example.com')

    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(input).toHaveValue('')
  })
})
