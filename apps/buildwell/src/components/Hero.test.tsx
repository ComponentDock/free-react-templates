import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /We Build Your Dream/i })).toBeInTheDocument()
  })

  it('renders the two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn more' })).toBeInTheDocument()
  })

  it('has correct href attributes for CTAs', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '#about')
  })
})
