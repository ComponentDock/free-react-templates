import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('PackWell — Logistics & Freight Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /WE MAKE STRONGEST SERVICE/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ocean Freight/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We have 25 years/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Service/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Client/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Weekly Newsletter/i })).toBeInTheDocument()
  })
})
