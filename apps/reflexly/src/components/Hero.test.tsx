import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /photography studio/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/capturing life's most precious moments/i)).toBeInTheDocument()
  })

  it('renders the Contact us CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument()
  })

  it('uses a picsum background image', () => {
    render(<Hero />)
    const section = document.querySelector('#home')
    expect(section).toHaveStyle(
      'background-image: url(https://picsum.photos/seed/reflexly-hero-1/1920/1080)',
    )
  })
})
