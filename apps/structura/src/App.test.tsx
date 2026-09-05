import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Structura — Architecture & Interior Design Studio')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Discover/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Welcome to Interior/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Specialization/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Service We Do/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Great Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Customer Feedback/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
  })
})
