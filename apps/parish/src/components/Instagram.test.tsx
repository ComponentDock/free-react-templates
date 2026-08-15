import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders four square tiles with hover labels', () => {
    const { container } = render(<Instagram />)
    expect(screen.getByRole('region', { name: 'Instagram gallery' })).toBeInTheDocument()
    expect(container.querySelectorAll('img').length).toBe(4)
    for (let i = 1; i <= 4; i++) {
      expect(screen.getByRole('link', { name: `Instagram photo ${i}` })).toBeInTheDocument()
    }
  })
})
