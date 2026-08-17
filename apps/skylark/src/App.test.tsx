import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { BRAND, HERO, RECENT_NEWS, GALLERY_COUNTRIES } from './data'

describe('App', () => {
  it('sets the document title and composes all sections in order', () => {
    render(<App />)

    expect(document.title).toBe('Skylark — Travel & Flight Booking Template')

    const banner = screen.getByRole('banner')
    expect(within(banner).getByText(BRAND)).toBeInTheDocument()

    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    expect(sections.map((section) => section.getAttribute('aria-label'))).toEqual([
      'Hero',
      'Search flights',
      'Special Offers',
      'Our Benefit',
      'Feature Places',
      'Destination Gallery',
      'News Latest',
    ])

    expect(screen.getByRole('heading', { level: 2, name: HERO.headline })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Special Offers' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: GALLERY_COUNTRIES[0] }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: RECENT_NEWS[0]!.title }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
