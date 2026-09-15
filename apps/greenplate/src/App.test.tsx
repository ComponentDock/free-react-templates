import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Greenplate — Fresh Grocery & Organic Food')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Verify key sections are present
    expect(screen.getByTestId('topbar')).toBeInTheDocument()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('features')).toBeInTheDocument()
    expect(screen.getByTestId('categories')).toBeInTheDocument()
    expect(screen.getByTestId('products')).toBeInTheDocument()
    expect(screen.getByTestId('deal-of-day')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('partners')).toBeInTheDocument()
    expect(screen.getByTestId('newsletter')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders all section headings in correct order', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /We serve Fresh Vegetables/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Deal of the day' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our satisfied customer says' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to our Newsletter' })).toBeInTheDocument()
  })
})
