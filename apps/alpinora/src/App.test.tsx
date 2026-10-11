import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the template name', () => {
    render(<App />)
    expect(document.title).toBe('Alpinora — Travel Template')
  })

  it('composes header, main sections, and footer landmarks in order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    for (const heading of [
      'Why Choose Us Your Fitness Builder',
      'Latest Project on the go',
      'Some Features that Made us Unique',
      'Frequently Asked Questions',
      'If you need, Just drop us a line',
    ]) {
      expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Being unique is the preference',
    )
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByRole('region', { name: 'Partners' })).toBeInTheDocument()
  })
})
