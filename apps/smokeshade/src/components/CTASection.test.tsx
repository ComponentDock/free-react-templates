import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTASection } from './CTASection'

describe('CTASection', () => {
  it('renders the heading', () => {
    render(<CTASection />)
    expect(screen.getByText('We Create Trends For The World')).toBeInTheDocument()
  })

  it('renders a description', () => {
    render(<CTASection />)
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })

  it('renders a Work With Us CTA button', () => {
    render(<CTASection />)
    expect(screen.getByRole('link', { name: /work with us/i })).toBeInTheDocument()
  })
})
