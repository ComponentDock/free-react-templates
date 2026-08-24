import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subtext, and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/We are pretty/)
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')
  })
})
