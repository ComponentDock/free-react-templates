import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2, name: /categories/i })).toBeInTheDocument()
  })

  it('renders the View all button', () => {
    render(<Categories />)
    const buttons = screen.getAllByText('View all')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all five category names', () => {
    render(<Categories />)
    const names = ['Animal', 'Natural', 'Portrait', 'Landscape', 'Wildlife']
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders picture counts', () => {
    render(<Categories />)
    expect(screen.getByText('120 pictures')).toBeInTheDocument()
    expect(screen.getByText('325 pictures')).toBeInTheDocument()
    expect(screen.getByText('540 pictures')).toBeInTheDocument()
    expect(screen.getByText('280 pictures')).toBeInTheDocument()
    expect(screen.getByText('195 pictures')).toBeInTheDocument()
  })

  it('renders category images with picsum sources', () => {
    render(<Categories />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
