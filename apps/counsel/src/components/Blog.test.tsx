import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()

    const titles = [
      'Understanding Your Rights in Criminal Defense Cases',
      'How to Choose the Right Lawyer for Your Business',
      "Family Law: Protecting Your Children's Best Interests",
    ]

    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows blog post images from picsum.photos', () => {
    render(<Blog />)

    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
