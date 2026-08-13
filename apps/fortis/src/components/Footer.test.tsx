import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brand, quickLinks } from '../data'
import { socialLinks } from './social-icons'

describe('Footer', () => {
  it('renders the light footer with About Me and Quick Links widgets', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')!
    expect(footer).toHaveAttribute('id', 'contact')
    expect(footer.className).toContain('bg-footer')
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    for (const label of quickLinks) {
      const link = screen.getByRole('link', { name: label })
      if (label === 'About Us') {
        expect(link).toHaveAttribute('href', '#about')
      } else if (label === 'Contact Us') {
        expect(link).toHaveAttribute('href', '#contact')
      } else {
        expect(link).toHaveAttribute('href', '#')
      }
    }
  })

  it('renders circular social brand icons on green-tinted circles', () => {
    render(<Footer />)
    for (const { label } of socialLinks) {
      const link = screen.getByRole('link', { name: label })
      expect(link.className).toContain('h-[50px]')
      expect(link.className).toContain('w-[50px]')
      expect(link.className).toContain('rounded-full')
      expect(link.className).toContain('bg-brand/20')
    }
  })

  it('submits the newsletter form and clears the email field', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email' })
    await user.type(input, 'hello@fortis.example')
    expect(input).toHaveValue('hello@fortis.example')

    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(input).toHaveValue('')
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`Copyright © \\d{4} ${brand.name}\\. All rights reserved\\.`)),
    ).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
