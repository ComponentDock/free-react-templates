import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { phoneDisplay, quoteLabel, socialLinks } from '../data'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the phone number as a runtime-computed tel: link', () => {
    render(<TopBar />)
    const phone = screen.getByText(phoneDisplay)
    const link = phone.closest('a')
    expect(link).toHaveAttribute('href', 'tel:' + phoneDisplay.replace(/[^\d+]/g, ''))
  })

  it('renders all social links with aria labels', () => {
    render(<TopBar />)
    for (const link of socialLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('renders the GET FREE QUOTE button', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: quoteLabel })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })
})
