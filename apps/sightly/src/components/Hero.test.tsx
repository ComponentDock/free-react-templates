import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /Build audience and grow your brand/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the subtext description', () => {
    render(<Hero />)
    expect(screen.getByText(/help businesses grow their online presence/i)).toBeInTheDocument()
  })

  it('renders the Explore Us CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Explore Us' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#about')
  })

  it('renders the hero illustration image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Marketing illustration')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/expo-illustration/600/500')
  })
})
