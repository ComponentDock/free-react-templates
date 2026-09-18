import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Lumen')
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /start a project/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /more about us/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Follow us on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Follow us on Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Follow us on Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Follow us on Dribbble')).toBeInTheDocument()
  })

  it('renders scroll down link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /scroll down/i })).toBeInTheDocument()
  })
})
