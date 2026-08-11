import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { brandName, footerCredit, footerCreditUrl, footerLinks } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the wordmark, nav links and a copyright line with credit', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByText(brandName)).toBeInTheDocument()
    for (const link of footerLinks) {
      expect(within(footer).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(footer).getByText(/All rights reserved/)).toBeInTheDocument()
    const credit = within(footer).getByRole('link', { name: footerCredit })
    expect(credit).toHaveAttribute('href', footerCreditUrl)
  })

  it('uses the dark navy background', () => {
    const { container } = render(<Footer />)
    expect(container.firstElementChild).toHaveClass('bg-navy')
  })
})
