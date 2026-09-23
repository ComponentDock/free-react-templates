import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { BRAND, HERO_SLIDES, SERVICES, TESTIMONIALS, BLOG_POSTS, ATTORNEYS } from './data'

beforeEach(() => {
  // StatsCounter uses IntersectionObserver — stub it for the full App render
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
      takeRecords = vi.fn(() => [])
    },
  )
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Courtcraft — Law Firm Template')
  })

  it('composes the Navbar and Footer with the brand', () => {
    render(<App />)

    const brandLinks = screen.getAllByRole('link', { name: BRAND })
    expect(brandLinks.length).toBeGreaterThanOrEqual(2)
    expect(brandLinks[0]).toHaveAttribute('href', '#home')
  })

  it('composes the HeroSlider with the first slide title', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0]!.title)
  })

  it('composes the StatsCounter section', () => {
    render(<App />)

    expect(screen.getByText('Lawyer')).toBeInTheDocument()
  })

  it('composes the ServicesGrid with service titles', () => {
    render(<App />)

    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
  })

  it('composes the CtaBanner', () => {
    render(<App />)

    // "Consultation" appears in both CtaBanner and IntroBanner
    const links = screen.getAllByRole('link', { name: 'Consultation' })
    expect(links.length).toBeGreaterThanOrEqual(2)
  })

  it('composes the Testimonials with client names', () => {
    render(<App />)

    for (const t of TESTIMONIALS) {
      expect(screen.getByText(t.name)).toBeInTheDocument()
    }
  })

  it('composes the ContactForm', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })

  it('composes the BlogPosts with blog titles', () => {
    render(<App />)

    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
    }
  })

  it('composes the AttorneyTeam with attorney names', () => {
    render(<App />)

    for (const atty of ATTORNEYS) {
      expect(screen.getByRole('heading', { level: 3, name: atty.name })).toBeInTheDocument()
    }
  })

  it('composes the IntroBanner with headings', () => {
    render(<App />)

    // "Need Legal Services?" appears in columns 0 and 2
    const headings = screen.getAllByText('Need Legal Services?')
    expect(headings.length).toBeGreaterThanOrEqual(2)
  })

  it('composes the Footer with Component Dock link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has main and contentinfo landmarks', () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
