import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { HERO, INTRO, ABOUT, WHY_US } from './data'

describe('App', () => {
  it('sets the document title and composes all sections in order', () => {
    render(<App />)

    expect(document.title).toBe('Barrister — Law Firm Template')

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Barrister/ })).toBeInTheDocument()

    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    expect(sections.map((section) => section.getAttribute('aria-label'))).toEqual([
      'Hero',
      'Intro',
      'About me',
      'Why Us',
      'Gallery',
      'Why Choose Us',
      'List Of Services',
    ])

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
    expect(screen.getByText(INTRO.heading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: ABOUT.heading })).toBeInTheDocument()
    expect(screen.getByText(WHY_US.kicker)).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})