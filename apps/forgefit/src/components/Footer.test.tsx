import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, link columns and newsletter', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Forgefit home' })).toBeInTheDocument()

    for (const column of ['Programs', 'Company', 'Support']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Stay Updated' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows the social icon links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('shows the copyright and legal links', () => {
    render(<Footer />)

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Style Guide' })).toBeInTheDocument()
  })

  it('confirms the newsletter subscription on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'member@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
    expect(screen.queryByRole('textbox', { name: 'Email address' })).not.toBeInTheDocument()
  })
})
