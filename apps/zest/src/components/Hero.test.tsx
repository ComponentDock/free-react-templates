import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and Purchase Now button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Zest is a SaaS & App Landing Startups Template/)
    expect(screen.getByText(/ready-to-use React app landing template/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Purchase Now' })).toHaveAttribute('href', '#demos')
  })

  it('shows the demo counts (10 total, 6 home, 4 blog)', () => {
    render(<Hero />)

    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('total pages')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
    expect(screen.getByText('home pages')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('blog pages')).toBeInTheDocument()
  })
})
