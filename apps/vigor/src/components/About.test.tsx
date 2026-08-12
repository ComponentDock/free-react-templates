import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the kicker, heading, paragraphs, CTAs, and photo', () => {
    render(<About />)

    expect(screen.getByText('Vigor')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Why choose Vigor?' })).toBeInTheDocument()
    expect(screen.getByText(/Vigor is a modern fitness gym/)).toBeInTheDocument()
    expect(screen.getByText(/Certified trainers track your plan/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Get a membership' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'Find out more' })).toHaveAttribute('href', '#services')

    expect(
      screen.getByRole('img', { name: /helping a member with their form/i }),
    ).toBeInTheDocument()
  })
})
