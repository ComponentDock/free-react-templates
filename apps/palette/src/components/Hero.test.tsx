import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subheading, and CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { name: /Creative UI\/UX Designer/i })).toBeInTheDocument()
    expect(screen.getByText('Hello! This is Palette')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Hire me' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download CV' })).toBeInTheDocument()
  })

  it('links Hire me to contact section', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Hire me' })).toHaveAttribute('href', '#contact')
  })
})
