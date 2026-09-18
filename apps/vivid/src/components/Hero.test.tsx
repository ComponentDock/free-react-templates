import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Are Creative Agency')
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Morbi mattis felis at nunc/)).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started!')).toBeInTheDocument()
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })

  it('has correct button links', () => {
    render(<Hero />)
    const getStarted = screen.getByText('Get Started!').closest('a')
    const learnMore = screen.getByText('Learn more').closest('a')
    expect(getStarted).toHaveAttribute('href', '#contact')
    expect(learnMore).toHaveAttribute('href', '#about')
  })
})
