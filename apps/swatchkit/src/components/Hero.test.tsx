import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Swatchkit/i })).toBeInTheDocument()
    expect(screen.getByText(/A Free UI Kit on Swatchkit Design/)).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Download Tools/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Components/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
