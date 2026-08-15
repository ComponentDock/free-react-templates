import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { siteName } from './data'

describe('App', () => {
  it('renders all sections in order and sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(`${siteName} — Be Fit. Top Gym`)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Trainers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Upcoming Classes' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
