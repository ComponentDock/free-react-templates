import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: /globally connected by large network/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about cabspot/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('cabspot-about'))
  })

  it('renders the Get Details button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /get details/i })).toBeInTheDocument()
  })

  it('renders the welcome subheading', () => {
    render(<About />)
    expect(screen.getByText('Welcome to CabSpot')).toBeInTheDocument()
  })
})
