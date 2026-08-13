import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about blurb, newsletter form, navigation columns, and attribution', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { name: 'Navigation' })).toHaveLength(2)
    for (const link of ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us']) {
      expect(screen.getAllByRole('link', { name: link })).toHaveLength(2)
    }

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('clears the email input after submitting the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'parent@example.com')
    expect(input).toHaveValue('parent@example.com')

    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(input).toHaveValue('')
  })
})
