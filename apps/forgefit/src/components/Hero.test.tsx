import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb and CTAs', () => {
    render(<Hero />)

    expect(screen.getByText('Now Open 24/7')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Push Beyond Your/)
    expect(heading.textContent).toMatch(/Limits/)

    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'View Programs' })).toHaveAttribute('href', '#programs')
    expect(screen.getByRole('link', { name: /Watch Demo/ })).toHaveAttribute('href', '#trainers')
  })

  it('shows the four gym stats', () => {
    render(<Hero />)

    expect(screen.getByText('5,000+')).toBeInTheDocument()
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Classes/Week')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Expert Trainers')).toBeInTheDocument()
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Access')).toBeInTheDocument()
  })
})
