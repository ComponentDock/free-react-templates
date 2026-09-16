import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Doing Nothing is Not An Option of Our Life',
    )
    expect(screen.getByText(/Give a helping hand/i)).toBeInTheDocument()
  })

  it('renders the Watch Video button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Watch Video/i })).toBeInTheDocument()
  })
})
