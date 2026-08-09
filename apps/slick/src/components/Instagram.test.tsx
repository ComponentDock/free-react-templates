import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('shows the section heading and six photo tiles', () => {
    render(<Instagram />)

    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBe(6)
    expect(screen.getAllByRole('img')[0]).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
