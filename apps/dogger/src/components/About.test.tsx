import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the heading, paragraphs, and a video thumbnail image', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/Separated they live in Bookmarksgrove/)).toBeInTheDocument()

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image).toHaveAttribute('alt', '')
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/dogger-about/)
  })
})
