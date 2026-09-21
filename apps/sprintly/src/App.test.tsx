import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sprintly — Fitness & Sport Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Fitness & Sport/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Welcome to Sprintly/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Choose Your Program/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Class Timetable/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Choose Your Plan/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why People Choose Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
  })
})
