import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('info@greenfield.com').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Greenfield').length).toBeGreaterThan(0)
    expect(screen.getByText('Agriculture Farming')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Greenfield')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Agriculture is the Most Healthful',
    )
    expect(screen.getAllByText('Our Services').length).toBeGreaterThan(0)
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
    expect(screen.getByText(/We.*Leader In Agricultural Market/)).toBeInTheDocument()
    expect(screen.getByText('4,800')).toBeInTheDocument()
    expect(screen.getByText('Explore Projects')).toBeInTheDocument()
    expect(screen.getByText('Watch Modern Agricultural Farming')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getAllByText('Request A Quote').length).toBeGreaterThan(0)
    expect(screen.getByText('Recent Post')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Greenfield — Agriculture Template')
  })
})
