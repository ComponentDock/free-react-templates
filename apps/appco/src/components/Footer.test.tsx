import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, about blurb, link columns, newsletter signup, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Appco' })).toBeInTheDocument()
    expect(screen.getByText(/powerful app for better productivity/)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Help Center' })).toBeInTheDocument()

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('subscribes with the newsletter form and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'hello@appco.com')
    expect(input).toHaveValue('hello@appco.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })
})
