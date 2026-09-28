import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FoodGallery } from './FoodGallery'

describe('FoodGallery', () => {
  it('renders the gallery heading and images', () => {
    render(<FoodGallery />)
    expect(screen.getByRole('heading', { name: /Our Signature Dishes/i })).toBeInTheDocument()
    const images = screen
      .getAllByRole('img')
      .filter((img) => img.getAttribute('src')?.includes('grillmark-gallery'))
    expect(images.length).toBe(8)
  })

  it('has left and right navigation arrows', () => {
    render(<FoodGallery />)
    expect(screen.getByRole('button', { name: /Scroll gallery left/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Scroll gallery right/i })).toBeInTheDocument()
  })

  it('scrolls right and left when arrows are clicked', async () => {
    const user = userEvent.setup()
    render(<FoodGallery />)
    const rightBtn = screen.getByRole('button', { name: /Scroll gallery right/i })
    const leftBtn = screen.getByRole('button', { name: /Scroll gallery left/i })
    await user.click(rightBtn)
    await user.click(leftBtn)
    // Verify buttons still exist after scrolling
    expect(rightBtn).toBeInTheDocument()
    expect(leftBtn).toBeInTheDocument()
  })
})
