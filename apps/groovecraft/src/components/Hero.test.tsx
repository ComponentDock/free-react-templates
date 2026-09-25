import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Latest album')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /beyond time/i })).toBeInTheDocument()
  })

  it('renders the Discover button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /discover/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen.getByRole('banner')
    expect(section.style.backgroundImage).toContain('groove-hero')
  })
})
