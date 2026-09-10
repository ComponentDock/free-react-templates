import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and description', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Brand new app to blow your mind/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/freshest baked goods/i)).toBeInTheDocument()
    expect(screen.getByText(/traditional recipes/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: 'Get Started Now' })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /Freshly baked bread/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('loaf-about'))
  })
})
