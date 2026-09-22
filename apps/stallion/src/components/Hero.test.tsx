import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and description', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Shape your/i)
    expect(screen.getByText(/Perfect body/i)).toBeInTheDocument()
    expect(screen.getByText(/Transform your lifestyle/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Become a Member/i })).toHaveAttribute(
      'href',
      '#courses',
    )
  })
})
