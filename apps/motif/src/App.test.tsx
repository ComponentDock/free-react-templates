import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Mosh — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/A Clean and Modern Template/)

    for (const name of [
      'All our clients love our work',
      'What you get if you start your business with us',
      'See our Online Portfolio',
      'This is how we work on Projects',
      'Are you Ready to have a Talk?',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
