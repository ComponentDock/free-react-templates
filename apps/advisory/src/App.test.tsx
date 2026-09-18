import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// Mock lucide-react's missing social brand icons used by Team + Footer in App
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
    expect(document.title).toBe('Advisory — Business Consulting Landing Page')
  })

  it('renders the Navbar with brand name', () => {
    render(<App />)
    const links = screen.getAllByText('Advisory')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Hero heading', () => {
    render(<App />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent('Business Consulting')
  })

  it('renders the Services section', () => {
    render(<App />)
    expect(screen.getByText('Our Service')).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByText(/Our\s*Philosophy/)).toBeInTheDocument()
  })

  it('renders the Accordion section', () => {
    render(<App />)
    expect(
      screen.getByRole('button', { name: 'Starts the automated process.' }),
    ).toBeInTheDocument()
  })

  it('renders the Testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Robart Brown')).toBeInTheDocument()
  })

  it('renders the Case Studies section', () => {
    render(<App />)
    expect(screen.getByText('Case studies')).toBeInTheDocument()
  })

  it('renders the Team section', () => {
    render(<App />)
    expect(screen.getByText('Experts')).toBeInTheDocument()
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
