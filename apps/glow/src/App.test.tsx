import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, error section, and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Glow — Error Page Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toBe('404')
    expect(within(main).getByRole('link', { name: 'home page' })).toHaveAttribute('href', '/')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
