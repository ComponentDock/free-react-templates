import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Learning Center for Your Kids',
    )
  })

  it('renders the Enroll Now CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Enroll Now' })).toBeInTheDocument()
  })

  it('renders Learn, Play, and Meal icon cards', () => {
    render(<Hero />)
    expect(screen.getByText('Learn')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()
    expect(screen.getByText('Meal')).toBeInTheDocument()
  })
})
