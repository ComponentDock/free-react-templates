import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { phoneLine } from '../data'

describe('Contact', () => {
  it('renders the light section with heading, form fields and call info', () => {
    render(<Contact />)

    const section = screen.getByTestId('contact')
    expect(section).toHaveAttribute('id', 'contact-section')
    expect(section.className).toContain('bg-light')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Contact Us')

    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your message.')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: `Need to know more on details? Call Us ${phoneLine}` }),
    ).toBeInTheDocument()
  })

  it('submits the form and clears all fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('First name'), 'Ada')
    await user.type(screen.getByPlaceholderText('Last name'), 'Lovelace')
    await user.type(screen.getByPlaceholderText('Email address'), 'ada@example.com')
    await user.type(screen.getByPlaceholderText('Write your message.'), 'Hello there')

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByPlaceholderText('First name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Last name')).toHaveValue('')
    expect(screen.getByPlaceholderText('Email address')).toHaveValue('')
    expect(screen.getByPlaceholderText('Write your message.')).toHaveValue('')
  })
})
