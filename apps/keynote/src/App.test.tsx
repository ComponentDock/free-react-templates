import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Keynote — AI Conference Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/The Future of AI is Here/i)
    expect(screen.getByRole('heading', { name: /Learn from the Best/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Three Distinct Paths/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Three Days of Innovation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Secure Your Spot/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Backed by Leaders/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Armory' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Got Questions/i })).toBeInTheDocument()
  })
})
