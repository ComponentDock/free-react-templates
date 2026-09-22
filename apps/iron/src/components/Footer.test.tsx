import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about, contact, and newsletter columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /about us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /newsletter/i })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('submits newsletter form and resets email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })

  it('displays phone numbers', () => {
    render(<Footer />)
    expect(screen.getByText(/\+800/)).toBeInTheDocument()
    expect(screen.getByText(/\+456/)).toBeInTheDocument()
  })
})
