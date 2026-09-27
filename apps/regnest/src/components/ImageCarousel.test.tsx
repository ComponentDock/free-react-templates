import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ImageCarousel } from './ImageCarousel'

describe('ImageCarousel', () => {
  it('renders the main image', () => {
    render(<ImageCarousel />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })

  it('navigates to next image on next click', async () => {
    render(<ImageCarousel />)
    const user = userEvent.setup()
    const mainImg = screen.getAllByRole('img')[0]!
    const src1 = mainImg.getAttribute('src')
    await user.click(screen.getByRole('button', { name: /next/i }))
    const src2 = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(src2).not.toBe(src1)
  })

  it('navigates to previous image on prev click', async () => {
    render(<ImageCarousel />)
    const user = userEvent.setup()
    // Go to next first
    await user.click(screen.getByRole('button', { name: /next/i }))
    const afterNext = screen.getAllByRole('img')[0]!.getAttribute('src')
    await user.click(screen.getByRole('button', { name: /previous/i }))
    const afterPrev = screen.getAllByRole('img')[0]!.getAttribute('src')
    expect(afterPrev).not.toBe(afterNext)
  })

  it('renders prev and next buttons', () => {
    render(<ImageCarousel />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('renders thumbnail images', () => {
    render(<ImageCarousel />)
    const thumbnails = screen.getAllByRole('img')
    expect(thumbnails.length).toBeGreaterThanOrEqual(2)
  })
})
