import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Experience } from './Experience'
import { experience } from '../data'

describe('Experience', () => {
  it('renders the centered heading, all eight icon items and the center image', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { level: 2, name: experience.heading })).toBeInTheDocument()
    for (const item of experience.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getAllByText(item.text).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('img', { name: experience.alt })).toHaveAttribute(
      'src',
      experience.image,
    )
    expect(document.querySelectorAll('svg.lucide')).toHaveLength(8)
  })
})
