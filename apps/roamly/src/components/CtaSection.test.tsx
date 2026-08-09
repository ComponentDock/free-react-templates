import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders the heading, subtext and Contact Us button', () => {
    render(<CtaSection />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready for Your Next Adventure?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Join thousands of travelers/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute(
      'href',
      'mailto:hello@roamly.example',
    )
  })

  it('renders a background photo with an overlay', () => {
    render(<CtaSection />)
    expect(screen.getByRole('img', { name: 'Beach at golden hour' })).toBeInTheDocument()
  })
})
