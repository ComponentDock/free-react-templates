import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Massive — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Welcome To Massive App Store/)

    for (const name of [
      'App Features',
      'All you want from app',
      'Description With Video',
      'How it work',
      'Awesome Screenshot',
      "What's say our Clients",
      'Our Expert Team',
      'Pricing Table',
      'From Blog',
      'Get In Touch',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: /Get Download Massive app/ })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
