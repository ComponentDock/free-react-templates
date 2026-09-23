import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByText('Casepoint')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<Footer />)
    expect(screen.getByText(/receive updates and latest news/i)).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Footer />)
    expect(screen.getByText('+564 7885 3222')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Footer />)
    expect(screen.getByText('youremail@gmail.com')).toBeInTheDocument()
  })

  it('renders Our Support links', () => {
    render(<Footer />)
    expect(screen.getByText('Advanced')).toBeInTheDocument()
    expect(screen.getByText('Management')).toBeInTheDocument()
    expect(screen.getByText('Corporate')).toBeInTheDocument()
  })

  it('renders Quick Link section', () => {
    render(<Footer />)
    expect(screen.getByText('New Law')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('newsletter submit clears email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByPlaceholderText('Your email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(screen.getByPlaceholderText('Your email')).toHaveValue('')
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/casepoint.*all rights reserved/i)).toBeInTheDocument()
  })
})
