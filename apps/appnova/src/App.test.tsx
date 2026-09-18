import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Appnova — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Your App, Reimagined' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Awesome Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Plans' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
