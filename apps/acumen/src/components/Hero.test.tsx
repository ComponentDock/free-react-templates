import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('We Are Provide Creative Business')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Contact Now' })).toHaveAttribute('href', '#contact')
  })

  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Quick and powerful solutions/)).toBeInTheDocument()
  })

  it('has dark overlay over background image', () => {
    render(<Hero />)
    const overlay = document.querySelector('.bg-black\\/40')
    expect(overlay).toBeInTheDocument()
  })
})
