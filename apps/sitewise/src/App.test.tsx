import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Sitewise — Web Hosting Template')

    expect(
      screen.getByRole('heading', { level: 1, name: /Go Big with your next Domain/ }),
    ).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(headings).toEqual([
      'Choose your Hosting Plan',
      'Core Features',
      'Dedicated support from engineers who know your stack',
      'Our Data Centres',
      'Frequently Ask Question',
      'Latest News',
      "Let's Launch your Website Now",
    ])

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
