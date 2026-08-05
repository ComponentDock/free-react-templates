import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about blurb, navigation links, social links, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Crafted' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Navigation Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Newsletter' })).toBeInTheDocument()
    for (const label of ['Services', 'Projects', 'Team', 'Blog']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })

  it('updates the newsletter email field and submits without reloading', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'hello@crafted.dev')
    expect(input).toHaveValue('hello@crafted.dev')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('hello@crafted.dev')
  })
})
