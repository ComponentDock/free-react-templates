import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brands } from './Brands'
import { brandNames } from '../data'

describe('Brands', () => {
  it('renders six grayscale brand wordmarks that restore contrast on hover', () => {
    const { container } = render(<Brands />)
    expect(screen.getByRole('heading', { name: 'Sponsors' })).toBeInTheDocument()
    for (const name of brandNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    const marks = container.querySelectorAll('[data-brand]')
    expect(marks).toHaveLength(brandNames.length)
    for (const mark of marks) {
      expect(mark.className).toContain('grayscale')
      expect(mark.className).toContain('hover:grayscale-0')
    }
  })
})
