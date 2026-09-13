import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { name: /Your Health is Our Priority/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /Search Places/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<CtaBanner />)
    const section = screen.getByTestId('cta-banner')
    expect(section.style.backgroundImage).toContain('medvista-cta')
  })
})
