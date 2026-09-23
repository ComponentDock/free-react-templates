import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('We Have Great Results')
  })

  it('renders the three stats', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Award Winning')).toBeInTheDocument()
    expect(screen.getByText('60 Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Best Attorneys Team')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Free Case Consultation')).toHaveAttribute('href', '#contact')
  })

  it('has aria-labelledby on section', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('region', { name: /We Have Great Results/i })).toBeInTheDocument()
  })

  it('renders background image', () => {
    const { container } = render(<CtaBanner />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
  })
})
