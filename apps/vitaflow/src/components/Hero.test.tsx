import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Welcome to Vitaflow/)).toBeInTheDocument()
    expect(screen.getByText(/Get in shape faster/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Learn more')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })

  it('renders background image with overlay', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toBeTruthy()
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('vitaflow-hero') })
  })
})
