import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Roadly — Car Rental Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Now It's easy for you rent a car/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Make your trip/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Choose A Perfect Car/i }).length,
    ).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Choose Your Car/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
  })
})
