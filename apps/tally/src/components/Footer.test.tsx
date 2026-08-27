import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Tally brand in footer', () => {
    render(<Footer />)
    expect(screen.getAllByText('Tally').length).toBeGreaterThanOrEqual(1)
  })

  it('renders services column', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders discover column', () => {
    render(<Footer />)
    expect(screen.getByText('Discover')).toBeInTheDocument()
  })

  it('renders free consultation form', () => {
    render(<Footer />)
    expect(screen.getByText(/free consultation/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('submits consultation form and clears email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(emailInput).toHaveValue('')
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument()
  })
})
