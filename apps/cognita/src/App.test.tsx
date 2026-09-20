import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Cognita — Online Learning Template')

    // Main content
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero heading (h1)
    expect(
      screen.getByRole('heading', { level: 1, name: /best online learning system/i }),
    ).toBeInTheDocument()

    // Section headings (h2)
    expect(screen.getByRole('heading', { name: /welcome to cognita/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our classes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what students say/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our experienced professors/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /upcoming events/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
