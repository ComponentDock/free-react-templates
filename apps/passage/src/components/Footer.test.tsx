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

import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Passage.' })).toBeInTheDocument()
  })

  it('renders the brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/Your trusted partner for immigration services/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    for (const link of ['Home', 'Services', 'Countries', 'Blog', 'Contact']) {
      expect(screen.getByText(link, { selector: 'a' })).toBeInTheDocument()
    }
  })

  it('renders Services section', () => {
    render(<Footer />)
    expect(screen.getByText('Services', { selector: 'h4' })).toBeInTheDocument()
    for (const svc of [
      'Visa Consultation',
      'Work Permits',
      'Student Visas',
      'Permanent Residency',
    ]) {
      expect(screen.getByText(svc, { selector: 'a' })).toBeInTheDocument()
    }
  })

  it('renders Contact section', () => {
    render(<Footer />)
    expect(screen.getByText('Contact', { selector: 'h4' })).toBeInTheDocument()
    expect(screen.getByText('123 Migration Way, Suite 200, New York, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@passage.com')).toBeInTheDocument()
  })

  it('renders the Component Dock link with correct href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    const copyright = screen.getByText(/©/)
    expect(copyright).toBeInTheDocument()
    expect(copyright.textContent).toContain(year)
  })
})
