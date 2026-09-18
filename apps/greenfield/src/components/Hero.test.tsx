import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Greenfield')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Agriculture is the Most Healthful',
    )
  })

  it('renders description', () => {
    render(<Hero />)
    expect(screen.getByText(/We provide the best agricultural services/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /our services/i })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: /request a quote/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
