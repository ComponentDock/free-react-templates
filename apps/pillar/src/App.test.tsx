import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pillar — Architecture & Interior Design Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Interior Design/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Meet Our Team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Frequently Ask Questions/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Awesome Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /News & Update/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
