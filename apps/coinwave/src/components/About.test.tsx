import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('displays the section heading', () => {
    render(<About />)
    expect(screen.getByText('Exchange Bitcoin is not that tough Anymore')).toBeInTheDocument()
  })

  it('displays description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/CoinWave simplifies/)).toBeInTheDocument()
    expect(screen.getByText(/Whether you are a first-time/)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('About CoinWave')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/coinwave-about/600/400')
  })
})
