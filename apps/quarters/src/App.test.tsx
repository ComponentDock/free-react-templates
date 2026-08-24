import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Quarters branding', () => {
    render(<App />)

    expect(document.title).toBe('Quarters — Apartment & Real Estate Template')
  })

  it('renders all sections in the source order (1:1)', () => {
    const { container } = render(<App />)

    const sections = container.querySelectorAll('main section')
    expect(sections).toHaveLength(6)
    expect(sections[0]?.getAttribute('id')).toBe('home')
    expect(sections[1]?.getAttribute('id')).toBe('about')
    expect(sections[2]?.getAttribute('id')).toBe('apartments')
    expect(sections[3]?.getAttribute('id')).toBe('featured')
    expect(sections[4]?.getAttribute('id')).toBe('customers')
    expect(sections[5]?.getAttribute('id')).toBe('news')

    // Navbar (nav) renders above the main content; social strip + footer after.
    expect(container.querySelector('nav')).not.toBeNull()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the social strip between the news section and the footer', () => {
    const { container } = render(<App />)

    const news = container.querySelector('#news') as HTMLElement
    const strip = container.querySelector('[aria-label="Social links"]') as HTMLElement
    const footer = container.querySelector('footer') as HTMLElement

    expect(news.compareDocumentPosition(strip) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0)
    expect(strip.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0)
  })
})
