import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lexicon — Hotel Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rest Journey in Single Step/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Luxury & Comfort/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Rooms' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Surrounded by galleries/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'We Offer to Our Guest' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nice Accommodation' })).toBeInTheDocument()
  })
})
