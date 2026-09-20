import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the heading', () => {
    render(<Speakers />)
    expect(screen.getByText('Our Speakers')).toBeInTheDocument()
  })

  it('renders all 8 speaker names', () => {
    render(<Speakers />)
    const names = [
      'Patricia Stone',
      'James Oliver',
      'Carla Banks',
      'William Smith',
      'Jessica Black',
      'Duncan Stan',
      'Elena Moore',
      'Ryan Clark',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders speaker images with correct src', () => {
    render(<Speakers />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/gathr-speaker-1/300/300')
  })

  it('renders CEO role for all speakers', () => {
    render(<Speakers />)
    const roles = screen.getAllByText('CEO')
    expect(roles).toHaveLength(8)
  })

  it('has a section landmark', () => {
    render(<Speakers />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
