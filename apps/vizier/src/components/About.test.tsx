import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about section with heading and text', () => {
    render(<About />)
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByText(/We Have 20\+ Years/)).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders two images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
