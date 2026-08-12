import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { GALLERY_IMAGES } from '../data'

describe('Gallery', () => {
  it('renders the heading and ten gallery photos', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Gallery' })).toBeInTheDocument()
    const links = screen.getAllByRole('link', { name: /Gallery photo/ })
    expect(links).toHaveLength(GALLERY_IMAGES.length)
    const images = document.querySelectorAll('img[alt="Gallery photo"]')
    expect(images).toHaveLength(GALLERY_IMAGES.length)
  })
})
