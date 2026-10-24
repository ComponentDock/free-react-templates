import { describe, it, expect, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  afterEach(() => {
    document.title = ''
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Cargonaut — Logistics & Freight Template')
  })

  it('composes every reference band in order', () => {
    const { container } = render(<App />)
    const headings = screen.getAllByRole('heading').map((node) => node.textContent)

    expect(headings[0]).toMatch(/global logistic service for business/i)
    expect(headings).toEqual(
      expect.arrayContaining([
        'Transportation',
        'Live Monitoring',
        'Worldwide Service',
        'Services We Offer',
        '100% secure and safe',
        'Why Choose Us?',
        'Get free Estimate',
        'Services',
        'Subscribe',
      ]),
    )

    const bands = container.querySelectorAll('main > section')
    expect(bands).toHaveLength(8)
    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(container.querySelector('header')).toBeInTheDocument()
  })

  it('renders the mandatory Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
