import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Abode — Architecture Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Homeownership never looked so affordable/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What We Do/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Curating a workplace/i })).toBeInTheDocument()
  })
})
