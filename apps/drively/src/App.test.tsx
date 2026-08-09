import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Drively — Car Rental Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Range Rover S7/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Begin your trip here/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Offer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Customer Testimony/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
  })
})
