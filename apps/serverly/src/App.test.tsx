import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Serverly — Web Hosting')
  })

  it('composes header, main and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every section in the original 1:1 order', () => {
    const { container } = render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Choose the perfect hosting' }),
    ).toBeInTheDocument()
    for (const heading of [
      'Why Choose us?',
      'The package 4 you',
      'Choose the best service',
      'The best servers',
    ]) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    // Section order: hero → domain strip → why → pricing → splits → footer.
    const main = container.querySelector('main')
    const order = Array.from(main?.querySelectorAll('h1, h2') ?? []).map((node) => node.textContent)
    expect(order).toEqual([
      'Choose the perfect hosting',
      'Why Choose us?',
      'The package 4 you',
      'Choose the best service',
      'The best servers',
    ])
  })
})
