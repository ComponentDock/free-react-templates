import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ContactDrop — Contact Form Template')
  })

  it('renders the navbar with brand text', () => {
    render(<App />)
    expect(screen.getByText('Co.')).toBeInTheDocument()
  })

  it('renders the contact form card by default', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('hides the card when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /close contact form/i }))
    expect(screen.queryByLabelText(/your name/i)).not.toBeInTheDocument()
  })

  it('shows success message after card is closed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /close contact form/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('allows reopening the card after closing', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /close contact form/i }))
    await user.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
  })

  it('renders the contact us link in the navbar', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '#contact')
  })
})
