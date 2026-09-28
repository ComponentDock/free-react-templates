import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: /We take a steps to build a successful business/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/team of experts works closely with clients/i)).toBeInTheDocument()
  })

  it('renders the Explore Us button', () => {
    render(<About />)
    const cta = screen.getByRole('link', { name: 'Explore Us' })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#services')
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('About us')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/expo-about/600/500')
  })
})
