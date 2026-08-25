import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the welcome image', () => {
    render(<Welcome />)
    const img = screen.getByAltText('Welcome to Orbiter')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders the About Us subheading', () => {
    render(<Welcome />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Welcome />)
    expect(screen.getByText(/We are a team of passionate professionals/)).toBeInTheDocument()
  })

  it('renders the About us button with arrow icon', () => {
    render(<Welcome />)
    expect(screen.getByRole('button', { name: /about us/i })).toBeInTheDocument()
  })
})
