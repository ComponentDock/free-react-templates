import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in the correct order', () => {
    render(<App />)

    expect(document.title).toBe('SacredGate — Church Template')

    /* Top bar */
    expect(screen.getByText('Days')).toBeInTheDocument()

    /* Navbar */
    expect(screen.getAllByRole('link', { name: /Church/i }).length).toBeGreaterThanOrEqual(1)

    /* Hero */
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/God is all around us/i)

    /* Intro */
    expect(
      screen.getByRole('heading', { level: 2, name: /Welcome to Our Church/i }),
    ).toBeInTheDocument()

    /* Services */
    expect(screen.getByRole('heading', { level: 2, name: /main activities/i })).toBeInTheDocument()

    /* Causes */
    expect(screen.getByRole('heading', { level: 2, name: /Causes/i })).toBeInTheDocument()

    /* Quote */
    expect(screen.getByRole('heading', { level: 2, name: /Quote of the day/i })).toBeInTheDocument()

    /* Sermon */
    expect(screen.getByRole('heading', { level: 2, name: /Sermon/i })).toBeInTheDocument()

    /* Newsletter */
    expect(screen.getByRole('heading', { level: 2, name: /Newsletter/i })).toBeInTheDocument()

    /* News */
    expect(screen.getByRole('heading', { level: 2, name: /Latest News/i })).toBeInTheDocument()

    /* Footer */
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
