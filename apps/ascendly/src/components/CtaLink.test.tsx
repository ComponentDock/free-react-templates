import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaLink } from './CtaLink'

describe('CtaLink', () => {
  it('renders the CTA label with the default services href', () => {
    render(<CtaLink />)
    const link = screen.getByRole('link', { name: 'View Our Services' })
    expect(link).toHaveAttribute('href', '#services-section')
    expect(link).toHaveClass('border-brand')
  })

  it('accepts a custom href', () => {
    render(<CtaLink href="#contact-section" />)
    expect(screen.getByRole('link', { name: 'View Our Services' })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })
})
