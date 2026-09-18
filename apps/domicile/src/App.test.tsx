import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Domicile — Real Estate Template')
  })
  it('composes the full page', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: '853 S Lucerne Blvd' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Wide Range of Properties')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
