import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectGallery } from './ProjectGallery'

describe('ProjectGallery', () => {
  it('renders the section heading', () => {
    render(<ProjectGallery />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Projects' })).toBeInTheDocument()
  })

  it('renders all six project cards', () => {
    render(<ProjectGallery />)

    const titles = [
      'Apartment Interior Design',
      'Office Space',
      'Condo Building',
      'Kitchen Interior',
      'Commercial Building',
      'Hotel Building',
    ]

    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders project images', () => {
    render(<ProjectGallery />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
