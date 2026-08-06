import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Landing — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Landing pages that convert/)

    expect(
      screen.getByRole('heading', { level: 2, name: /Everything you need to launch/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Built for modern teams/ }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
