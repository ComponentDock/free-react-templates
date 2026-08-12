import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in source order with a footer crediting Component Dock', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'International Digital Business Event' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Next Event will Start in' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Welcome to Rally' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meet Head Speakers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Event Schedule' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'California, United States' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ticket Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets a descriptive document title', () => {
    render(<App />)

    expect(document.title).toBe('Rally — International Digital Business Event')
  })
})
