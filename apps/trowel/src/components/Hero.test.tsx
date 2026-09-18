import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Make your dream home/i })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get a Quote/i })).toBeInTheDocument()
  })

  it('CTA links to contact section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Get a Quote/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Future Construction/i)).toBeInTheDocument()
  })
})
