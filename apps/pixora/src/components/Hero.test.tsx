import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroImage } from '../data'

describe('Hero', () => {
  it('renders the two-line headline with the brand name highlighted', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Pixora')
    expect(heading).toHaveTextContent('What else do you need?')
    expect(heading.querySelector('span')).toHaveTextContent('Pixora')
    expect(container.querySelector('img')).toHaveAttribute('src', heroImage)
  })

  it('renders the supporting paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/we craft clean, minimal websites/i)).toBeInTheDocument()
  })
})
