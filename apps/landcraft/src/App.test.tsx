import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByTestId('fun-facts')).toBeInTheDocument()
    expect(screen.getByTestId('portfolio')).toBeInTheDocument()
    expect(screen.getByTestId('video-cta')).toBeInTheDocument()
    expect(screen.getByTestId('team')).toBeInTheDocument()
    expect(screen.getByTestId('faq')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('quote-cta')).toBeInTheDocument()
    expect(screen.getByTestId('blog')).toBeInTheDocument()
    expect(screen.getByTestId('newsletter')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the Landcraft brand name in the navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Landcraft').length).toBeGreaterThan(0)
  })

  it('renders the hero section with welcome text', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to Landcraft/)).toBeInTheDocument()
  })
})
