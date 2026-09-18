import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('All things need to repair')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Don't look further/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toHaveAttribute('href', '#contact')
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Professional tech repair/)).toBeInTheDocument()
  })
})
