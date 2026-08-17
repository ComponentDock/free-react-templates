import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  blogTitle,
  heroTitle,
  inquiryTitle,
  pricingTitle,
  proofTitle,
  servicesTitle,
  testimonialsTitle,
} from './data'

describe('App', () => {
  it('renders every section of the one-page logistics template in order', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    for (const title of [
      inquiryTitle,
      proofTitle,
      pricingTitle,
      servicesTitle,
      testimonialsTitle,
      blogTitle,
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument()
    }

    // Stats appear in both the proof section and the services section.
    expect(screen.getAllByText('24/7 Fast Delivery')).toHaveLength(2)
    expect(screen.getAllByText('We Deliver Worldwide')).toHaveLength(2)

    expect(screen.getAllByText('Get started')).toHaveLength(5) // inquiry + 4 plans
    expect(screen.getAllByText('$199')).toHaveLength(1)

    expect(screen.getAllByText(/Deliverly/).length).toBeGreaterThanOrEqual(3)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
