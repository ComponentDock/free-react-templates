import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Coinly — Crypto & Finance Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Invest in Bitcoin/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What is Bitcoin' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Started With Bitcoin' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to our Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
  })
})
