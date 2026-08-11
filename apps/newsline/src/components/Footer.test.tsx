import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  footerColumns,
  footerCopyright,
  footerLabel,
  footerNewsletterPlaceholder,
  footerNewsletterSubmitLabel,
  socialLabel,
  socialLinks,
} from '../data'

describe('Footer', () => {
  it('renders the widget columns with tweets and address details', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo', { name: footerLabel })
    for (const column of footerColumns) {
      expect(within(footer).getByRole('heading', { name: column.title })).toBeInTheDocument()
    }
    const addressColumn = footerColumns[2]!
    expect('address' in addressColumn && addressColumn.address).toBeTruthy()
    expect(within(footer).getByText(addressColumn.address)).toBeInTheDocument()
    expect(within(footer).getByText(addressColumn.phone)).toBeInTheDocument()
    expect(within(footer).getByText(addressColumn.email)).toBeInTheDocument()
    for (const tweet of footerColumns[0]!.tweets) {
      expect(within(footer).getByText(tweet)).toBeInTheDocument()
    }
  })

  it('renders the newsletter form with input and submit button', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo', { name: footerLabel })
    expect(
      within(footer).getByRole('textbox', { name: footerNewsletterPlaceholder }),
    ).toBeInTheDocument()
    expect(
      within(footer).getByRole('button', { name: footerNewsletterSubmitLabel }),
    ).toBeInTheDocument()
  })

  it('submits the footer newsletter form without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const footer = screen.getByRole('contentinfo', { name: footerLabel })
    const form = within(footer).getByRole('form', { name: footerNewsletterSubmitLabel })
    await user.click(within(form).getByRole('button', { name: footerNewsletterSubmitLabel }))
    expect(
      within(form).getByRole('textbox', { name: footerNewsletterPlaceholder }),
    ).toBeInTheDocument()
  })

  it('renders round social buttons with brand colors', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo', { name: footerLabel })
    const social = within(footer).getByRole('list', { name: socialLabel })
    for (const link of socialLinks) {
      const anchor = within(social).getByRole('link', { name: link.label })
      expect(anchor).toBeInTheDocument()
      expect(anchor.className).toContain('rounded-full')
    }
  })

  it('renders the copyright bar with the current year', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo', { name: footerLabel })
    const year = new Date().getFullYear()
    expect(
      within(footer).getByText(new RegExp(`Copyright © ${year} ${footerCopyright}`)),
    ).toBeInTheDocument()
  })

  it('uses the dark footer background', () => {
    const { container } = render(<Footer />)
    expect(container.firstElementChild).toHaveClass('bg-footer')
  })
})
