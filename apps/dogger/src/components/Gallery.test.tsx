import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the heading and six photos', () => {
    const { container } = render(<Gallery />)

    expect(screen.getByRole('heading', { name: 'Photo Gallery' })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })
})
