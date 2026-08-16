import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  about,
  caseStudy,
  ctaBanner,
  footer,
  hero,
  pricing,
  services,
  siteName,
  testimonials,
  whyChooseUs,
} from './data'

describe('App', () => {
  it('composes all sections in the reference order with a main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')

    // Section order: hero → services → about → pricing → why choose us →
    // brand strip → case study → testimonials → CTA banner (footer outside main).
    const order = [
      hero.headline,
      services.heading,
      about.heading,
      pricing.heading,
      whyChooseUs.heading,
      'Northwind',
      caseStudy.heading,
      testimonials.slides[0]!.author,
      ctaBanner.heading,
    ]
    const texts = order.map((text) => within(main).getByText(text))
    for (let i = 1; i < texts.length; i += 1) {
      const previous = texts[i - 1]
      const current = texts[i]
      if (!previous || !current) continue
      expect(
        previous.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    }
  })

  it('renders the header, main and footer landmarks', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: siteName }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Reachly — SEO & Marketing Template')
  })
})
