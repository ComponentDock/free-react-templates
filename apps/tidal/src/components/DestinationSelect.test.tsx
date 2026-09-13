import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DestinationSelect } from './DestinationSelect'

describe('DestinationSelect', () => {
  it('renders the section heading', () => {
    render(<DestinationSelect />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Select Your Destination' }),
    ).toBeInTheDocument()
  })

  it('renders all five destination cards', () => {
    render(<DestinationSelect />)

    const names = ['Philippines', 'Canada', 'Thailand', 'Australia', 'Greece']
    for (const name of names) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('renders destination images with picsum URLs', () => {
    render(<DestinationSelect />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('shows ratings for each destination', () => {
    render(<DestinationSelect />)
    expect(screen.getAllByText('4.8')).toHaveLength(2)
    expect(screen.getByText('4.7')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('4.6')).toBeInTheDocument()
  })
})
