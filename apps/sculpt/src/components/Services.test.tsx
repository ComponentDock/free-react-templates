import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the heading, four services, and a photo collage', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Work hard stay humble' }),
    ).toBeInTheDocument()
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
    const images = document.querySelectorAll('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('alt', 'Gym classes')
  })
})
