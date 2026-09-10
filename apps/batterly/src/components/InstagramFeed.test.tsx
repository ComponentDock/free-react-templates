import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramFeed } from './InstagramFeed'

describe('InstagramFeed', () => {
  it('renders multiple image tiles', () => {
    render(<InstagramFeed />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(4)
  })

  it('images have alt text', () => {
    render(<InstagramFeed />)
    const imgs = screen.getAllByRole('img')
    imgs.forEach((img) => {
      expect(img.getAttribute('alt')).toBeTruthy()
    })
  })
})
