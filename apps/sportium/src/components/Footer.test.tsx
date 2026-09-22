import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Sportium/ })).toHaveAttribute('href', '#home')
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    for (const label of ['Home', 'About Us', 'Classes & Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter your email here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'go' })).toBeInTheDocument()
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Enter your email here')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'go' }))
    expect(input).toHaveValue('')
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
