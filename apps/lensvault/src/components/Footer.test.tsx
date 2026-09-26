import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows About Me heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /about me/i })).toBeInTheDocument()
  })

  it('shows Newsletter heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /newsletter/i })).toBeInTheDocument()
  })

  it('shows Follow Me heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /follow me/i })).toBeInTheDocument()
  })

  it('has an email input', () => {
    render(<Footer />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  })

  it('has a subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('has social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dribbble/i })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Footer />)
    const form = screen.getByRole('textbox', { name: /email address/i }).closest('form')!
    form.addEventListener('submit', (e) => {
      e.preventDefault = preventDefault
    })
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
  })
})
