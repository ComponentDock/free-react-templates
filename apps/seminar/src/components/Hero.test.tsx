import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the conference heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Web Design Conference 2024',
    )
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Conference 2024')).toBeInTheDocument()
  })

  it('renders the date line', () => {
    render(<Hero />)
    expect(screen.getByText(/September 6th-7th/)).toBeInTheDocument()
  })

  it('renders the Buy Tickets CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Buy Tickets' })).toHaveAttribute('href', '#tickets')
  })

  it('has the home section id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#home')).toBeInTheDocument()
  })
})
