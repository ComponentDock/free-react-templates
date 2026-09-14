import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Amazing workspace you will love',
    )
    expect(screen.getByText(/Discover our spaces/)).toBeInTheDocument()
  })

  it('renders CTA button linking to spaces', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /explore our spaces/i })
    expect(cta).toHaveAttribute('href', '#spaces')
  })

  it('renders rating badge', () => {
    render(<Hero />)
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText(/Rating based on 500\+/)).toBeInTheDocument()
  })
})
