import { render, screen } from '@testing-library/react'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders heading and CTA button', () => {
    render(<CtaSection />)
    expect(screen.getByText(/Enhance Your Skills/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /enroll now/i })).toBeInTheDocument()
  })
})
