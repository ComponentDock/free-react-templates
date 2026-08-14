import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'
import { ctaBackdrop, qualityCtaCopy } from '../data'

describe('CtaBand', () => {
  it('renders lead + heading on the photo backdrop', () => {
    const { container } = render(
      <CtaBand backdrop={ctaBackdrop} lead="Lead line" heading="Big Heading" />,
    )
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain(ctaBackdrop)
    expect(screen.getByText('Lead line')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Big Heading' })).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders the optional CTA button', () => {
    render(
      <CtaBand
        backdrop={ctaBackdrop}
        heading={qualityCtaCopy.heading}
        cta={{ label: qualityCtaCopy.cta, href: '#contact' }}
      />,
    )
    const button = screen.getByRole('link', { name: qualityCtaCopy.cta })
    expect(button).toHaveAttribute('href', '#contact')
  })

  it('omits the lead when not provided', () => {
    render(<CtaBand backdrop={ctaBackdrop} heading="Only Heading" />)
    expect(screen.queryByText(/^Lead/)).not.toBeInTheDocument()
  })
})
