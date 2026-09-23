import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'
import { CTA_HEADING, CTA_TEXT } from '../data'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)

    expect(screen.getByRole('heading', { level: 2, name: CTA_HEADING })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBanner />)

    expect(screen.getByText(CTA_TEXT)).toBeInTheDocument()
  })

  it('renders the Consultation CTA link', () => {
    render(<CtaBanner />)

    const link = screen.getByRole('link', { name: 'Consultation' })
    expect(link).toHaveAttribute('href', '#contact')
  })
})
