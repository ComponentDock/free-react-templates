import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact section', () => {
    render(<Contact />)
    expect(screen.getByRole('region', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the map placeholder', () => {
    render(<Contact />)
    expect(screen.getByRole('img', { name: /map location/i })).toBeInTheDocument()
  })

  it('renders name input', () => {
    render(<Contact />)
    expect(screen.getByRole('textbox', { name: /your name/i })).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Contact />)
    expect(screen.getByRole('textbox', { name: /your email/i })).toBeInTheDocument()
  })

  it('renders message textarea', () => {
    render(<Contact />)
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
  })

  it('renders Send Message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const name = screen.getByRole('textbox', { name: /your name/i })
    const email = screen.getByRole('textbox', { name: /your email/i })
    const message = screen.getByRole('textbox', { name: /message/i })
    const button = screen.getByRole('button', { name: /send message/i })
    await user.type(name, 'John')
    await user.type(email, 'john@example.com')
    await user.type(message, 'Hello')
    await user.click(button)
    expect(name).toHaveValue('John')
    expect(email).toHaveValue('john@example.com')
    expect(message).toHaveValue('Hello')
  })

  it('applies custom className', () => {
    render(<Contact className="custom-class" />)
    expect(screen.getByRole('region', { name: /contact/i })).toHaveClass('custom-class')
  })
})
