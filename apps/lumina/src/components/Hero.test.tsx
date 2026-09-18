import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/No Need to Find/)).toBeInTheDocument()
    expect(screen.getByText(/metropolitan world/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen.getByText(/No Need to Find/).closest('section')!
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('lumina-hero') })
  })

  it('has purple overlay', () => {
    render(<Hero />)
    const overlay = document.querySelector('.bg-brand\\/80')!
    expect(overlay).toBeInTheDocument()
  })
})
