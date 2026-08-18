import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CONSULT_PHONE, CTA } from '../data'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading, quote, blurb and Learn More button', () => {
    render(<CtaBand />)
    expect(screen.getByRole('heading', { level: 2, name: CTA.heading })).toBeInTheDocument()
    expect(screen.getByText(CTA.quote)).toBeInTheDocument()
    expect(screen.getByText(CTA.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CTA.button })).toHaveAttribute('href', CTA.buttonHref)
  })

  it('renders the free consulting phone CTA', () => {
    render(<CtaBand />)
    expect(screen.getByText(CTA.callLabel)).toBeInTheDocument()
    expect(screen.getByText(CONSULT_PHONE)).toBeInTheDocument()
  })
})
