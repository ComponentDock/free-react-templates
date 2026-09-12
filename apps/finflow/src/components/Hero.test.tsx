import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Banking Solutions/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get In Touch/i })).toHaveAttribute('href', '#contact')
  })

  it('displays the hero image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Banking solutions overview/i })).toBeInTheDocument()
  })
})
