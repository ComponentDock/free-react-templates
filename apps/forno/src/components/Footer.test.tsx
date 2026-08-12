import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four columns with brand, hours, instagram and newsletter', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Forno home' })).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Open Hours' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBe(6)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('shows a confirmation after subscribing with an email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'diner@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('ignores an empty email on subscribe', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })
})
