import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramStrip } from './InstagramStrip'
import { instagramImages } from '../data'

describe('InstagramStrip', () => {
  it('renders 6 Instagram images', () => {
    render(<InstagramStrip />)
    const images = screen.getAllByRole('img', { name: 'Instagram post' })
    expect(images).toHaveLength(instagramImages.length)
  })

  it('each image is wrapped in a link', () => {
    render(<InstagramStrip />)
    const images = screen.getAllByRole('img', { name: 'Instagram post' })
    for (const img of images) {
      expect(img.closest('a')).toHaveAttribute('href', '#top')
    }
  })
})
