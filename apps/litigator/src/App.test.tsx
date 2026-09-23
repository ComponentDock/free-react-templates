import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Litigator — Law Firm Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We Fight/)

    expect(
      screen.getByRole('heading', { level: 2, name: /Our Practice Areas/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /50 Years/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Happy/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /More Expertise/ })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
