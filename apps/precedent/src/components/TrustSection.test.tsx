import { render, screen } from '@testing-library/react'
import { TrustSection } from './TrustSection'

describe('TrustSection', () => {
  it('renders the heading', () => {
    render(<TrustSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Why to Put Trust In Precedent',
    )
  })

  it('renders the subtitle', () => {
    render(<TrustSection />)
    expect(screen.getByText('Welcome to Precedent')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<TrustSection />)
    expect(
      screen.getByText(/committed to providing exceptional legal representation/),
    ).toBeInTheDocument()
  })

  it('renders all four trust features', () => {
    render(<TrustSection />)
    expect(screen.getByText('Expert Attorneys')).toBeInTheDocument()
    expect(screen.getByText('Great Discount')).toBeInTheDocument()
    expect(screen.getByText('Legal Advisory')).toBeInTheDocument()
    expect(screen.getByText('Quick Charges')).toBeInTheDocument()
  })

  it('renders the Lady Justice image', () => {
    const { container } = render(<TrustSection />)
    const img = container.querySelector('img[alt*="Lady Justice"]')
    expect(img).toBeInTheDocument()
  })

  it('has the about id for navigation', () => {
    render(<TrustSection />)
    expect(
      screen.getByRole('region', { name: /Why to Put Trust In Precedent/i }),
    ).toBeInTheDocument()
  })
})
