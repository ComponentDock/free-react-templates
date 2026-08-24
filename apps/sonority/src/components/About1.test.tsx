import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About1 } from './About1'

describe('About1', () => {
  it('renders the heading', () => {
    render(<About1 />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Listen to a personalized/)
  })

  it('renders three numbered feature items', () => {
    render(<About1 />)
    expect(screen.getByText(/Personalized playlists/)).toBeInTheDocument()
    expect(screen.getByText(/Stream over 50 million/)).toBeInTheDocument()
    expect(screen.getByText(/Create and share/)).toBeInTheDocument()
  })

  it('renders the placeholder image', () => {
    render(<About1 />)
    const img = screen.getByAltText('Sonority listening experience')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
