import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ctaButtonLabel, ctaText, ctaTitle } from '../data'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the headline, sub-line, and sand Get In Touch link', () => {
    render(<CtaBand />)

    expect(screen.getByRole('heading', { level: 2, name: ctaTitle })).toBeInTheDocument()
    expect(screen.getByText(ctaText)).toBeInTheDocument()

    const link = screen.getByRole('link', { name: ctaButtonLabel })
    expect(link).toHaveAttribute('href', '#contact-section')
  })
})
