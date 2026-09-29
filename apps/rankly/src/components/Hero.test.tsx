import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /SEO Analysis/i })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get a Quote')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    expect(screen.getByAltText('SEO analysis illustration')).toBeInTheDocument()
  })
})
