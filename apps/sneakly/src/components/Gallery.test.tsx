import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'
import { galleryImages } from '../data'

describe('Gallery', () => {
  it('renders the heading and six photo tiles', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { name: 'Follow Us On Instagram' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Sneakly on Instagram' })).toHaveLength(6)
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('uses the seeded gallery photos in order', () => {
    render(<Gallery />)

    const images = screen.getAllByRole('img').map((img) => img.getAttribute('src'))
    expect(images).toEqual(galleryImages)
  })

  it('keeps tiles clickable without navigating', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    await user.click(screen.getAllByRole('link', { name: 'Sneakly on Instagram' })[0]!)
    expect(screen.getAllByRole('link', { name: 'Sneakly on Instagram' })).toHaveLength(6)
  })
})
