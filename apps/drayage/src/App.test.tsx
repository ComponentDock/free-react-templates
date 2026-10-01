import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Drayage — Freight Broker & Courier Services')
  })

  it('renders banner, main, and contentinfo landmarks with a single h1', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('composes the sections in canonical order: hero before services before counters', () => {
    const { container } = render(<App />)
    const hero = screen.getByRole('heading', { level: 1 })
    const services = screen.getByRole('heading', {
      level: 2,
      name: /freight broker we are the best/i,
    })
    const counters = screen.getByRole('heading', { level: 2, name: /clients & counters/i })
    const reviews = screen.getByRole('heading', { level: 2, name: /customer reviews/i })
    const news = screen.getByRole('heading', { level: 2, name: /latest news company/i })
    expect(hero.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      services.compareDocumentPosition(counters) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      counters.compareDocumentPosition(reviews) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(reviews.compareDocumentPosition(news) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(container.querySelector('#top')).not.toBeNull()
  })

  it('renders the topbar, header, and footer chrome', () => {
    render(<App />)
    expect(screen.getByText('450 Strand, Charing Cross, London')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
