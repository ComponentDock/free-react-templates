import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Favison — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Build a better business & faster/)

    // The original repeats this heading in the About and Stats sections.
    expect(
      screen.getAllByRole('heading', { level: 2, name: 'Form Female From Cattle Evening.' }),
    ).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Pricing Plan' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Easy to Use Mobile Application/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Read Our Latest News' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
