import { render, screen } from '@testing-library/react'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders heading', () => {
    render(<CtaSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Eduforge')
  })

  it('renders CTA button', () => {
    render(<CtaSection />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<CtaSection />)
    expect(screen.getByText(/join thousands/i)).toBeInTheDocument()
  })
})
