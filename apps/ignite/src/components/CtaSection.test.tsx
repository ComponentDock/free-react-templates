import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders the heading, blurb, and both buttons', () => {
    render(<CtaSection />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/DON'T MISS OUT/i)
    expect(screen.getByText(/there's a place for you here/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Plan Your Visit' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
