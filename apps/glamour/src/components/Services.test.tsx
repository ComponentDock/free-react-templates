import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders the heading and four service rows with icons', () => {
    const { container } = render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our services' })).toBeInTheDocument()
    for (const title of [
      'Fashion Shows',
      'Corporate Events',
      'Commercial Photo Shots',
      'Exhibitions/Trade Shows',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    // Four 70px round pink icon badges.
    expect(container.querySelectorAll('.rounded-full svg')).toHaveLength(4)
  })
})
