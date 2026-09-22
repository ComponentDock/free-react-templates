import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Blog' })).toBeInTheDocument()
  })

  it('shows both blog posts with Read More buttons', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Body Building' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Yoga Pilates' })).toBeInTheDocument()
    const readMoreButtons = screen.getAllByText('Read More')
    expect(readMoreButtons).toHaveLength(2)
  })

  it('displays dates for both posts', () => {
    render(<Blog />)
    const dates = screen.getAllByText('April 22, 2024')
    expect(dates).toHaveLength(2)
  })
})
