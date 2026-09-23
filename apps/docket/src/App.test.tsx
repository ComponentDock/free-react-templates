import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    // TopBar
    expect(screen.getAllByText('+00 1234 567').length).toBeGreaterThanOrEqual(1)

    // Navbar
    expect(screen.getAllByText('Docket').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()

    // Hero
    expect(
      screen.getByRole('heading', { name: /don't feel helpless we fight for justice/i }),
    ).toBeInTheDocument()

    // TrustFeatures
    expect(
      screen.getByRole('heading', { name: /why to put trust in law firm/i }),
    ).toBeInTheDocument()

    // StatsCounter
    expect(screen.getByText('90+')).toBeInTheDocument()

    // PracticeAreas
    expect(screen.getByRole('heading', { name: /what we cover/i })).toBeInTheDocument()

    // CaseStudies
    expect(screen.getByRole('heading', { name: /recent case studies/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: /happy clients/i })).toBeInTheDocument()

    // CtaBanner
    expect(screen.getByRole('heading', { name: /we have great results/i })).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: /recent blog/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
