import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the newsletter section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /subscribe to newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByRole('textbox', { name: /email address/i })
    await user.type(emailInput, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('renders four footer columns', () => {
    render(<Footer />)
    expect(screen.getByText('Syllabus')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('links to Component Dock in copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders menu links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Education St, Learning City')).toBeInTheDocument()
    expect(screen.getByText('+123 456 7890')).toBeInTheDocument()
    expect(screen.getByText('info@syllabus.com')).toBeInTheDocument()
  })
})
