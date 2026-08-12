import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders six grayscale brand marks', () => {
    render(<Brands />)

    const section = screen.getByRole('region', { name: 'Brands' })
    const marks = section.querySelectorAll('span')
    expect(marks).toHaveLength(6)
    expect(section).toHaveTextContent('Vertex')
    expect(section).toHaveTextContent('Lumen')
    for (const mark of marks) {
      expect(mark).toHaveClass('grayscale')
    }
  })
})
