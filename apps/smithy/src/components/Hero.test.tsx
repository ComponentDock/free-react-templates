import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hello subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /I am Alex Smith/i })).toBeInTheDocument()
  })

  it('renders the role text', () => {
    render(<Hero />)
    expect(screen.getByText('Senior Web Developer')).toBeInTheDocument()
  })

  it('renders Hire Me button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /hire me/i })).toHaveAttribute('href', '#contact')
  })

  it('renders Get CV button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get cv/i })).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Alex Smith portrait')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/smithy-hero/500/600')
  })
})
