import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading with creative text', () => {
    render(<Hero />)
    expect(screen.getByText(/Creative/)).toBeInTheDocument()
    expect(screen.getByText(/UI\/UX/)).toBeInTheDocument()
    expect(screen.getByText(/Designer/)).toBeInTheDocument()
  })

  it('renders subheading', () => {
    render(<Hero />)
    expect(screen.getByText(/Hello! This is Draftly/)).toBeInTheDocument()
  })

  it('renders Hire me button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /hire me/i })).toHaveAttribute('href', '#contact')
  })

  it('renders Download CV button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '#about')
  })
})
