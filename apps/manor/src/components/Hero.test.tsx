import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('find your home')
  })

  it('renders prev/next navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })
})
