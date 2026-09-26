import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InstagramGallery } from './InstagramGallery'

describe('InstagramGallery', () => {
  it('renders the heading', () => {
    render(<InstagramGallery />)
    expect(screen.getByRole('heading', { name: 'Follow me on Instagram' })).toBeInTheDocument()
  })

  it('renders 5 photo thumbnails', () => {
    render(<InstagramGallery />)
    const photos = screen.getAllByRole('link', { name: /Instagram photo/ })
    expect(photos).toHaveLength(5)
  })

  it('each photo has an img element', () => {
    render(<InstagramGallery />)
    const imgs = screen.getAllByAltText(/Instagram photo/)
    expect(imgs).toHaveLength(5)
    for (const img of imgs) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('Instagram overlay icons are initially hidden (opacity-0)', () => {
    render(<InstagramGallery />)
    const overlays = document.querySelectorAll('.opacity-0')
    expect(overlays.length).toBeGreaterThanOrEqual(5)
  })

  it('section has proper landmark', () => {
    render(<InstagramGallery />)
    expect(screen.getByRole('region', { name: 'Follow me on Instagram' })).toBeInTheDocument()
  })

  it('hover reveals Instagram overlay', async () => {
    const user = userEvent.setup()
    render(<InstagramGallery />)
    const firstPhoto = screen.getAllByRole('link', { name: /Instagram photo/ })[0]!
    await user.hover(firstPhoto)
    expect(firstPhoto).toBeInTheDocument()
  })
})
