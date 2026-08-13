import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Metalwork — Industrial Template')

    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(headings).toEqual([
      "We'll Handle Any Problems and Solve Them",
      "Let's Build Together",
      "We'll handle any intricate custom design",
      'Projects',
      'Testimonial',
      'Blog Posts',
      'Get Started With Metalwork Free Template',
    ])

    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
