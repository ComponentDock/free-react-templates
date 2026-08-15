import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows about blurb, contact details, newsletter input, and copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/A yoga and fitness studio/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText(/rockybeach road/)).toBeInTheDocument()
    expect(screen.getByText('+880 1234 654 953')).toBeInTheDocument()
    expect(screen.getByText('+880 3434 654 953')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Vinyasa\. All rights reserved\./)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('submits the newsletter form without reloading', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'member@example.com')
    fireEvent.submit(input.closest('form') as HTMLFormElement)
    expect(input).toHaveValue('member@example.com')
  })
})
