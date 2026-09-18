import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and premium text', () => {
    render(<Hero />)
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Quality')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /Restaurant/i })).toBeInTheDocument()
  })

  it('renders a scroll-down link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /scroll to about/i })).toHaveAttribute('href', '#about')
  })
})
