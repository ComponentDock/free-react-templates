import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, tagline, blurb and both call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Showkit/)

    expect(screen.getByText('Showkit App Landing Page Template')).toBeInTheDocument()
    expect(screen.getByText('A Complete Landing Page and Multipurpose Package')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'View Demos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buy Showkit' })).toBeInTheDocument()
  })
})
