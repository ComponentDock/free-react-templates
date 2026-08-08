import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Skyline — Architecture Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Properties Now In City/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We Are Leaders In Properties/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Leaders In Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Luxuries Apartment/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()
  })
})
