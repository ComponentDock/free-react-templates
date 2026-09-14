import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shotglow — Photography Studio Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Creative Studio/i })).toBeInTheDocument()
    expect(screen.getByText('About our studio')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Check Latest Work/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What We Offer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pricing Plan/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest Story/i })).toBeInTheDocument()
  })
})
