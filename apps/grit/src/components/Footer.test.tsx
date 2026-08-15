import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  componentDockLabel,
  componentDockUrl,
  footerAboutText,
  footerAboutTitle,
  footerLinks,
  footerLinksTitle,
  footerSubscribeButton,
  footerSubscribeLabel,
  footerSubscribeTitle,
} from '../data'

describe('Footer', () => {
  it('renders the About, Links, and Subscribe columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerAboutTitle })).toBeInTheDocument()
    expect(screen.getAllByText(footerAboutText).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: footerLinksTitle })).toBeInTheDocument()
    for (const link of footerLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: footerSubscribeTitle })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: footerSubscribeButton })).toBeInTheDocument()
  })

  it('links Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: componentDockLabel })
    expect(dock).toHaveAttribute('href', componentDockUrl)
  })

  it('accepts an email in the Subscribe form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(footerSubscribeLabel)
    await user.type(input, 'jane@example.com')
    expect(input).toHaveValue('jane@example.com')
  })
})
