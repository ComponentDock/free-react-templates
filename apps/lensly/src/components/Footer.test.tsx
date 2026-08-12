import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FOOTER_LINKS } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the black footer with about, quick links, newsletter, and bottom bar', () => {
    const { container } = render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-black')

    expect(screen.getByRole('heading', { name: 'Lensly' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Quick Links' })).toBeInTheDocument()
    for (const link of FOOTER_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }

    expect(screen.getByRole('heading', { level: 2, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')
    expect(screen.getByRole('button', { name: 'Subscribe' }).className).toContain('bg-brand')

    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Lensly. All rights reserved.`)).toBeInTheDocument()
    expect(container.querySelector('.border-t')).not.toBeNull()
  })

  it('clears the newsletter input on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'jane@example.com')
    expect(input).toHaveValue('jane@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })
})
