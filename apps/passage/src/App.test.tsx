import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

vi.mock('lucide-react', async () => {
  const actual = await vi.importActual<typeof import('lucide-react')>('lucide-react')
  const Stub = (props: React.SVGProps<SVGSVGElement>) => <svg data-testid="icon-stub" {...props} />
  return {
    ...actual,
    Facebook: Stub,
    Twitter: Stub,
    Instagram: Stub,
  }
})

import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Passage — Immigration Services')
  })

  it('renders the Navbar with brand name', () => {
    render(<App />)
    const links = screen.getAllByText('Passage')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the HeroBanner heading', () => {
    render(<App />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent('Immigration Service Provider')
  })

  it('renders the CallToTop section', () => {
    render(<App />)
    expect(screen.getByText('Fast Processing')).toBeInTheDocument()
  })

  it('renders the ServiceCards section', () => {
    render(<App />)
    expect(screen.getByText('Immigration Destinations')).toBeInTheDocument()
  })

  it('renders the BookingForm section', () => {
    render(<App />)
    expect(screen.getByText('Schedule Your Immigration Consultation')).toBeInTheDocument()
  })

  it('renders the Features section', () => {
    render(<App />)
    expect(screen.getByText('Our Features')).toBeInTheDocument()
  })

  it('renders the Testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders the BrandLogos section', () => {
    render(<App />)
    expect(screen.getByText('Trusted By Leading Organizations')).toBeInTheDocument()
  })

  it('renders the BlogPosts section', () => {
    render(<App />)
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
  })

  it('renders the CtaBottom section', () => {
    render(<App />)
    expect(screen.getByText('Ready to Start Your Journey?')).toBeInTheDocument()
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
