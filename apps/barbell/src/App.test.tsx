import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Barbell — Gym & CrossFit Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'What is Crossfit?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Book Your First Class' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Join Our Gym Today' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Lifestyle & Diet' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Come & Train With Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Crossfit' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'WOD' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Kids & Teens' })).toBeInTheDocument()
  })
})
