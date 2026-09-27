import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders subheading', () => {
    render(<Hero />)
    expect(screen.getByText(/ui\/ux designer & developer/i)).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/john/i)).toBeInTheDocument()
    expect(screen.getByText(/craftwork/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('More About Me')).toBeInTheDocument()
    expect(screen.getByText('Hire Me')).toBeInTheDocument()
  })

  it('has portrait image', () => {
    render(<Hero />)
    const img = screen.getByAltText(/portrait/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('craftwork-portrait'))
  })
})
