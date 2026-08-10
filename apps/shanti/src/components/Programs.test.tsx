import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders the section header with subheading and heading', () => {
    render(<Programs />)
    expect(screen.getByText('Yoga Classes')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Choose Your Level & Focus' })).toBeInTheDocument()
  })

  it('renders six program cards with photos', () => {
    render(<Programs />)
    for (const title of [
      'Group Lessons',
      'Yoga For Beginners',
      'Yoga For Pregnant',
      'Yoga For Couples',
      'Bikram Yoga',
      'Yoga Barre',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/shanti-/)
    }
  })
})
