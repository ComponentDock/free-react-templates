import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingCta } from './ClosingCta'

describe('ClosingCta', () => {
  it('carries the three-worst-courses ask', () => {
    render(<ClosingCta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Bring us your three worst courses' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/The awkward one, the enormous one/)).toBeInTheDocument()
  })

  it('offers both closing CTAs', () => {
    render(<ClosingCta />)

    expect(screen.getByRole('link', { name: /Book a walkthrough/ })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: /See pricing/ })).toHaveAttribute('href', '#pricing')
  })

  it('anchors the contact target for the header CTA', () => {
    const { container } = render(<ClosingCta />)

    expect(container.querySelector('section')).toHaveAttribute('id', 'contact')
  })
})
