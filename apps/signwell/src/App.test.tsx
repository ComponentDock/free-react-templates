import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('SignWell — Login Form Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the login form heading', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 2 }).textContent).toMatch(/Sign In/i)
  })
})
