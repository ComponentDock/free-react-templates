import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { ABOUT_RIGHT_TITLE, APPOINTMENT_TITLE, HERO_TITLE, LAWYERS, PRACTICE_AREAS } from './data'

describe('App', () => {
  it('sets the document title and composes every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Esquire — Law Firm Template')

    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2, h3, h4')).map((h) => h.textContent)
    expect(headings).toEqual([
      HERO_TITLE,
      'Finest And Strongest Law Firm Win The World',
      ABOUT_RIGHT_TITLE,
      'Practice Area',
      ...PRACTICE_AREAS.map((area) => area.title),
      'Our Lawyers',
      ...LAWYERS.map((lawyer) => lawyer.name),
      APPOINTMENT_TITLE,
    ])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
