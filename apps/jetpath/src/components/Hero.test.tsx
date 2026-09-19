import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and search form', () => {
    render(<Hero />)
    expect(screen.getByText(/Explore the World/)).toBeInTheDocument()
    expect(screen.getByText(/with Jetpath/)).toBeInTheDocument()
    expect(screen.getByLabelText('Destination')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const bg = document.querySelector('[style*="picsum"]')
    expect(bg).toBeTruthy()
  })
})
