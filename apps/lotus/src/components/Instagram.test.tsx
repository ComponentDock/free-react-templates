import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('shows the heading and a strip of square images', () => {
    const { container } = render(<Instagram />)
    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    const posts = screen.getAllByRole('link', { name: /Instagram post/ })
    expect(posts).toHaveLength(6)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(6)
    expect(images[0]!).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
