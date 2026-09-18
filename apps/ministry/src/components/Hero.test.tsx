import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Transforming Lives')).toBeInTheDocument()
    expect(screen.getByText('Total Surrender to God')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Hero />)
    expect(screen.getByText(/far from the countries/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /become a volunteer/i })).toBeInTheDocument()
  })

  it('has background image', () => {
    render(<Hero />)
    const bg = document.querySelector('[role="img"]')
    expect(bg).toBeInTheDocument()
    expect(bg).toHaveAttribute('aria-label', 'Church worship background')
  })
})
