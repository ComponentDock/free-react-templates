import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /We Are Your Partners in Human Resource/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('renders the Learn More link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('has the hero section with id', () => {
    render(<Hero />)
    expect(document.getElementById('home')).toBeInTheDocument()
  })
})
