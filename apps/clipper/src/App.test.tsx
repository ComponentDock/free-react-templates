import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Clipper — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1, name: 'Clipper' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Barber Features' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Good Looking Style' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
  })
})
