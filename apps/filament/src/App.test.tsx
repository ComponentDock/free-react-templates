import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Filament — Feminine Landing Page')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Brand new Filament/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /core feature carousel/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /core feature image/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Process steps' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /service carousel/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /contact/i })).toBeInTheDocument()
  })
})
