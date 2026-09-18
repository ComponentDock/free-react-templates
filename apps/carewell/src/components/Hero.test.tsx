import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline text', () => {
    render(<Hero />)
    expect(screen.getByText(/Together We Can/)).toBeInTheDocument()
    expect(screen.getByText(/Change Lives/)).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/blank cassettes/)).toBeInTheDocument()
  })

  it('renders Donate Now CTA button', () => {
    render(<Hero />)
    const donateBtn = screen.getByText('Donate Now')
    expect(donateBtn).toBeInTheDocument()
    expect(donateBtn.closest('a')).toHaveAttribute('href', '#donate')
  })

  it('renders View Activity button', () => {
    render(<Hero />)
    const viewBtn = screen.getByText('View Activity')
    expect(viewBtn).toBeInTheDocument()
    expect(viewBtn.closest('a')).toHaveAttribute('href', '#causes')
  })

  it('has dark overlay', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-black\\/33')
    expect(overlay).toBeInTheDocument()
  })
})
