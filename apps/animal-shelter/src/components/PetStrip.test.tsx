import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PetStrip } from './PetStrip'

describe('PetStrip', () => {
  it('renders a strip of at least four pet photos', () => {
    render(<PetStrip />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    expect(images[0]).toHaveAttribute('alt', 'Shelter pet 1')
    expect(images[0]).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/animal-shelter-1'),
    )
  })
})
