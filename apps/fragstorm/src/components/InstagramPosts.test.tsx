import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramPosts } from './InstagramPosts'

describe('InstagramPosts', () => {
  it('renders the section title', () => {
    render(<InstagramPosts />)
    expect(screen.getByText(/Instagram Posts/)).toBeInTheDocument()
  })

  it('renders 4 instagram post links', () => {
    render(<InstagramPosts />)
    // Filter to only the <a> elements (post links), not the section
    const links = screen
      .getAllByRole('link')
      .filter((el) => el.getAttribute('aria-label')?.startsWith('Instagram post'))
    expect(links).toHaveLength(4)
  })

  it('has correct section id', () => {
    const { container } = render(<InstagramPosts />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'instagram')
  })
})
