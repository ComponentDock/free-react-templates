import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the top bar, navbar, sections and footer in landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Forno — Restaurant Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    for (const heading of [
      'Best Restaurant',
      'Forno Restaurant',
      'Catering Services',
      'Our Menu',
      'Our Master Chef',
      'Make Reservation',
      'Happy Customer',
      'Recent Posts',
    ]) {
      expect(
        screen.getAllByRole('heading', { name: new RegExp(heading) }).length,
      ).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('link', { name: '+ 1235 2355 98' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the featured dish strip between the hero and the welcome', () => {
    const { container } = render(<App />)

    const hero = container.querySelector('#home')
    const featured = container.querySelector('[aria-label="Featured dishes"]')
    const about = container.querySelector('#about')

    expect(hero).not.toBeNull()
    expect(featured).not.toBeNull()
    expect(about).not.toBeNull()

    expect(hero!.compareDocumentPosition(featured!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(
      featured!.compareDocumentPosition(about!) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })
})
