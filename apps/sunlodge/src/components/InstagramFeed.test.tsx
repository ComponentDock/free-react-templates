import { render, screen } from '@testing-library/react'
import { InstagramFeed } from './InstagramFeed'
import { describe, expect, it } from 'vitest'

describe('InstagramFeed', () => {
  it('renders six Instagram images', () => {
    render(<InstagramFeed />)
    const images = screen.getAllByAltText('Instagram post')
    expect(images).toHaveLength(6)
  })

  it('each image links to Instagram', () => {
    render(<InstagramFeed />)
    const links = screen.getAllByRole('link', { name: 'Instagram post' })
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.instagram.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
