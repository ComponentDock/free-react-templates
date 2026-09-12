import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders the Instagram heading', () => {
    render(<Instagram />)
    expect(screen.getByText(/Follow us on Instagram/)).toBeDefined()
  })

  it('renders 4 photo links', () => {
    render(<Instagram />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('links to Instagram', () => {
    render(<Instagram />)
    const links = screen.getAllByRole('link')
    const instagramLink = links.find((l) => l.getAttribute('href') === 'https://instagram.com')
    expect(instagramLink).toBeDefined()
  })
})
