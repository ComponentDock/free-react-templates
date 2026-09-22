import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the rooms heading', () => {
    render(<Rooms />)
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
  })

  it('renders all three room cards', () => {
    render(<Rooms />)
    expect(screen.getByText('Standard Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByText('Premium Suite')).toBeInTheDocument()
  })

  it('renders room prices', () => {
    render(<Rooms />)
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
  })

  it('renders room images with alt text', () => {
    render(<Rooms />)
    expect(screen.getByAltText('Standard Room')).toBeInTheDocument()
    expect(screen.getByAltText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByAltText('Premium Suite')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Rooms className="custom-class" />)
    expect(screen.getByText('Our Rooms').closest('section')).toHaveClass('custom-class')
  })
})
