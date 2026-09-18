import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subheading, and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Digital Innovation Company that Creates Solution',
    )
    expect(screen.getByText('Welcome to Innovex')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Portfolio' })).toBeInTheDocument()
  })

  it('has background image overlay', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('relative')
  })
})
