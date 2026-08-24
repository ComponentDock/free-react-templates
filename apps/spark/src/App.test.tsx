import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

vi.mock('./components/Navbar', () => ({
  Navbar: () => <header data-testid="navbar">Navbar</header>,
}))

vi.mock('./components/Hero', () => ({
  Hero: () => <section data-testid="hero">Hero</section>,
}))

vi.mock('./components/Features', () => ({
  Features: () => <section data-testid="features">Features</section>,
}))

vi.mock('./components/Services', () => ({
  Services: () => <section data-testid="services">Services</section>,
}))

vi.mock('./components/VideoDemo', () => ({
  VideoDemo: () => <section data-testid="video-demo">VideoDemo</section>,
}))

vi.mock('./components/Pricing', () => ({
  Pricing: () => <section data-testid="pricing">Pricing</section>,
}))

vi.mock('./components/Testimonials', () => ({
  Testimonials: () => <section data-testid="testimonials">Testimonials</section>,
}))

vi.mock('./components/FAQ', () => ({
  FAQ: () => <section data-testid="faq">FAQ</section>,
}))

vi.mock('./components/CTA', () => ({
  CTA: () => <section data-testid="cta">CTA</section>,
}))

vi.mock('./components/Integrations', () => ({
  Integrations: () => <section data-testid="integrations">Integrations</section>,
}))

vi.mock('./components/Metrics', () => ({
  Metrics: () => <section data-testid="metrics">Metrics</section>,
}))

vi.mock('./components/Footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}))

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Spark — App Landing Template')
  })

  it('renders all sections in order', () => {
    render(<App />)

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('features')).toBeInTheDocument()
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByTestId('video-demo')).toBeInTheDocument()
    expect(screen.getByTestId('pricing')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('faq')).toBeInTheDocument()
    expect(screen.getByTestId('cta')).toBeInTheDocument()
    expect(screen.getByTestId('integrations')).toBeInTheDocument()
    expect(screen.getByTestId('metrics')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
