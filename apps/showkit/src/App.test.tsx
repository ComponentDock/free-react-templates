import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, hero, demo sections and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Showkit — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Showkit/)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Home onepage Demos' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Showkit Blog Page Demos' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
