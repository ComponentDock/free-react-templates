import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the heading and body text', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(about.heading)
    expect(screen.getByText(about.body)).toBeInTheDocument()
  })

  it('renders both food images with alt text', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', about.images[0])
    expect(images[1]).toHaveAttribute('src', about.images[1])
  })
})
