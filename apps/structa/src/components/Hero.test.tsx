import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /Experienced Construction Solution/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Building the future/i)).toBeInTheDocument()
  })

  it('renders the Our Services CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Our Services/i })).toHaveAttribute('href', '#services')
  })

  it('renders the Explore Our Latest Projects sidebar', () => {
    render(<Hero />)
    expect(screen.getByText('Explore Our Latest Projects')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Now/i })).toHaveAttribute('href', '#projects')
  })

  it('has the hero section landmark', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: /Hero/i })).toBeInTheDocument()
  })
})
