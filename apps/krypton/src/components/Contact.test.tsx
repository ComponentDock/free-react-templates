import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact form with all fields', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('clears the form on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Test')
    await user.type(screen.getByPlaceholderText('Your Message'), 'Hello')

    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('')
    expect(screen.getByPlaceholderText('Subject')).toHaveValue('')
    expect(screen.getByPlaceholderText('Your Message')).toHaveValue('')
  })

  it('has the correct section landmark', () => {
    render(<Contact />)
    expect(screen.getByRole('region', { name: 'Contact' })).toBeInTheDocument()
  })
})
