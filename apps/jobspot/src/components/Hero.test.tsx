import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading with job count', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Jobs Listed Here/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Love what you do/i)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Far far away/i)).toBeInTheDocument()
  })

  it('renders Contact us and Search Job buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByText('Search Job')).toBeInTheDocument()
  })

  it('renders a background image', () => {
    render(<Hero />)
    const img = screen.getByRole('presentation')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum'))
  })
})
