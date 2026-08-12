import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every section in order with the page title', () => {
    render(<App />)

    expect(document.title).toBe('Swole — Fitness Studio Template')

    const main = screen.getByRole('main')
    const headings = main.querySelectorAll('h1, h2')
    const headingTexts = Array.from(headings).map((h) => h.textContent)

    expect(headingTexts).toContain('Swole Fitness Studio')
    expect(headingTexts).toContain('Our Popular Courses')
    expect(headingTexts).toContain('Get Your Schedule')
    expect(headingTexts).toContain('Why You Should Choose Us')
    expect(headingTexts).toContain('We are Swole. A Dedicated Fitness Center Since 2004')
    expect(headingTexts).toContain("What Customer's Say About Us")
    expect(headingTexts).toContain('Many more Features are Waiting!')

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
