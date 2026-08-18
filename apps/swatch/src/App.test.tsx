import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { componentDockUrl } from './data'

describe('App', () => {
  it('composes every template section in order', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    const headingTexts = headings
      .map((h) => h.textContent?.replace(/\s+/g, ' ').trim() ?? '')
      .filter((t) => t.length > 0)

    expect(headingTexts[0]).toContain('My Story')
    expect(headingTexts[1]).toContain('This is My Expertise')
    expect(headingTexts[2]).toContain('My Latest Work')
    expect(headingTexts[3]).toContain('Our Successful Students')
    expect(headingTexts[4]).toContain('Recent From Blog')
    expect(headingTexts[5]).toContain('Flexible Packages')

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('links the footer to Component Dock', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const link = within(footer).getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', componentDockUrl)
    expect(link.textContent).toContain('Component Dock')
  })

  it('sets the document title to the Swatch branding', () => {
    render(<App />)
    expect(document.title).toContain('Swatch')
  })
})
