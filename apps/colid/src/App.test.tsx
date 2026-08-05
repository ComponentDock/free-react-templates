import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the contact footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Colid — Business Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: "It's all about Promoting your Business" }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Special Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Affordable Price' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Special Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Client Says' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Beautiful Place for your Great Journey' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
