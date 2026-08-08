import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb, CTAs, stats, and construction image', () => {
    render(<Hero />)

    expect(screen.getByText('Trusted by 500+ clients since 1998')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Building Tomorrow's/)

    expect(screen.getByText(/We deliver exceptional quality construction/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Get Free Estimate/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Our Projects/ })).toBeInTheDocument()

    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })
})
