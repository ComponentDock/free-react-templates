import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders blog heading', () => {
    render(<Blog />)
    expect(screen.getByText('From Blog')).toBeInTheDocument()
  })

  it('renders two blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('How to Start Your Fitness Journey the Right Way')).toBeInTheDocument()
    expect(
      screen.getByText('Essential Supplements Every Athlete Should Know About'),
    ).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<Blog />)
    expect(screen.getByText('Gym & Fitness')).toBeInTheDocument()
    expect(screen.getByText('Nutrition')).toBeInTheDocument()
  })
})
