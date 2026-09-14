import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders all four room cards with names and prices', () => {
    render(<Rooms />)

    const roomNames = ['Double Room', 'Premium King Room', 'Deluxe Room', 'Family Room']
    for (const name of roomNames) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$159')).toBeInTheDocument()
    expect(screen.getByText('$198')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
  })

  it('renders More Details links for each room', () => {
    render(<Rooms />)

    const links = screen.getAllByRole('link', { name: 'More Details' })
    expect(links).toHaveLength(4)
  })

  it('renders room images with picsum placeholders', () => {
    render(<Rooms />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    images.slice(0, 4).forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
