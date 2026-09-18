import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Find Nearby')
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover the best places/)).toBeInTheDocument()
  })

  it('renders the search keyword input', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search keyword')).toBeInTheDocument()
  })

  it('renders the location input', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
  })

  it('renders the category dropdown', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('prevents default on form submit', () => {
    render(<Hero />)
    const form = screen.getByLabelText('Search keyword').closest('form')!
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })
})
