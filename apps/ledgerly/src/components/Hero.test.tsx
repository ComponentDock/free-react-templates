import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Crypto World/)
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#features')
  })

  it('renders the illustration image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /cryptocurrency illustration/i })).toBeInTheDocument()
  })
})
