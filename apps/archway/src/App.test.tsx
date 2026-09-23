import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Archway — Interior Design & Architecture Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /We Create Amazing Architecture Designs/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Perfectly Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We are the best interior/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interesting Facts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Our satisfied customer says/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Architect Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Make Perfection/i })).toBeInTheDocument()
  })
})
