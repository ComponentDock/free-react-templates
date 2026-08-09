import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders the closing headline and both tour actions', () => {
    render(<CtaSection />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'See It for Yourself' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Schedule a Tour' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call Us/ })).toBeInTheDocument()
  })
})
