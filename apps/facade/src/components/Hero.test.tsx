import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tagline, headline, and call to action', () => {
    render(<Hero />)

    expect(screen.getByText('Building for Society')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Future Architechure' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view project/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
