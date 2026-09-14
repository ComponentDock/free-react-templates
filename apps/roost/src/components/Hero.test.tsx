import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and search input', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Get your way home worldwide',
    )
    expect(screen.getByLabelText('Search places')).toBeInTheDocument()
  })

  it('renders the Search Places button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search places/i })).toBeInTheDocument()
  })
})
