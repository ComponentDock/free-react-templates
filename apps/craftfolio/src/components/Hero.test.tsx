import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the name and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Personal Portfolio Website')).toBeInTheDocument()
  })

  it('renders the Hire Me CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /hire me/i })).toHaveAttribute('href', '#contact')
  })
})
