import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the dark band heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
  })

  it('renders four service cards on the dark background', () => {
    const { container } = render(<Services />)

    for (const title of [
      'Fashion Shows',
      'Corporate Events',
      'Commercial Photo Shots',
      'Exhibitions/Trade Shows',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark')
  })

  it('renders a circular pink icon per service', () => {
    const { container } = render(<Services />)

    const icons = container.querySelectorAll('.icon-circle')
    expect(icons.length).toBe(4)
  })
})
