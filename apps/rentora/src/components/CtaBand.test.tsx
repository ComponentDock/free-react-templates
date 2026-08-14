import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'
import { CTA } from '../data'

describe('CtaBand', () => {
  it('shows the headline, blurb, and gold Sign Up button', () => {
    render(<CtaBand />)

    expect(screen.getByRole('heading', { level: 2, name: CTA.heading })).toBeInTheDocument()
    expect(screen.getByText(CTA.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CTA.ctaLabel })).toBeInTheDocument()
  })
})
