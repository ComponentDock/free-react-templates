import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Largest Classifieds In The World')).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText('You can buy, sell anything you want.')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
  })

  it('renders the location input', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument()
  })

  it('renders the category dropdown', () => {
    render(<Hero />)
    expect(screen.getByDisplayValue('All Categories')).toBeInTheDocument()
  })

  it('renders the Search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has all category options', () => {
    render(<Hero />)
    expect(screen.getByRole('option', { name: 'Real Estate' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Electronics' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Other' })).toBeInTheDocument()
  })
})
