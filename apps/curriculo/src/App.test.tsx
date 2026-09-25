import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
    expect(screen.getByText(/trusted by/i)).toBeInTheDocument()
    // Headings with split text (Featured + strong)
    expect(screen.getAllByRole('heading', { name: /case studies/i }).length).toBeGreaterThanOrEqual(
      1,
    )
    expect(screen.getByRole('heading', { name: /resume/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /certifications/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /testimonial/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /touch/i })).toBeInTheDocument()
    expect(screen.getAllByText(/component dock/i).length).toBeGreaterThanOrEqual(1)
    expect(document.getElementById('portfolio')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Curriculo — Resume & Portfolio Template')
  })
})
