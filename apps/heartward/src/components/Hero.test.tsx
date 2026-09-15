import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and description', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Save the children')
    expect(screen.getByText(/Together we can make a meaningful difference/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/More charity/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /start donation/i })).toHaveAttribute('href', '#causes')
  })
})
