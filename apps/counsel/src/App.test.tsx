import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Counsel — Law Firm Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Finest And Strongest Law Firm/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why We Are/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Case Study/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Meet Our Attorneys/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest From Blog/i })).toBeInTheDocument()
  })
})
