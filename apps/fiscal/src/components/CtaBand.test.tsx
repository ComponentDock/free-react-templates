import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { CTA } from '../data'

describe('CtaBand', () => {
  it('renders the heading, copy, and Contact us button over the photo band', () => {
    render(<CtaBand />)
    const section = screen.getByRole('region', { name: 'Call to action' })
    expect(section.getAttribute('style')).toContain(CTA.image)
    expect(screen.getByRole('heading', { level: 2, name: CTA.heading })).toBeInTheDocument()
    expect(screen.getByText(CTA.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CTA.buttonLabel })).toHaveAttribute(
      'href',
      '#contact-section',
    )
  })
})
