import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Meliora — Charity Template')
  })

  it('composes the page with banner, main and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every section heading', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { hidden: true })
    const texts = headings.map((h) => h.textContent)
    expect(texts).toEqual(
      expect.arrayContaining([
        'Support a cause you care about',
        'Causes we are serving',
        'Who we are?',
        'We serve for peoples',
        'They need your help',
        'Join with Us',
      ]),
    )
  })
})
