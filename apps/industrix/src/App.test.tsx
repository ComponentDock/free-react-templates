import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Industrix — Industrial & Construction Template')
  })

  it('renders the banner, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders all major section headings', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /We provide your Industrial solution/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /we provide all of your/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /take a look around/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /deliver innovative/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our location/i })).toBeInTheDocument()
  })

  it('has no colorlib references in app code', () => {
    render(<App />)
    const body = document.body.innerHTML
    expect(body.toLowerCase()).not.toMatch(/colorlib/)
  })
})
