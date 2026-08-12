import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { INSTAGRAM_BUTTON, INSTAGRAM_IMAGES } from '../data'
import { InstagramStrip } from './InstagramStrip'

describe('InstagramStrip', () => {
  it('renders the centered white button over six equal square photos', () => {
    const { container } = render(<InstagramStrip />)
    const section = container.querySelector('section')!
    expect(section).toHaveAttribute('id', 'gallery')
    const button = screen.getByRole('link', { name: INSTAGRAM_BUTTON })
    expect(button).toHaveClass('bg-white')
    expect(button).toHaveClass('rounded-[5px]')
    const links = screen.getAllByRole('link', { name: /Instagram photo \d/ })
    expect(links).toHaveLength(INSTAGRAM_IMAGES.length)
    const images = section.querySelectorAll('img')
    expect(images).toHaveLength(INSTAGRAM_IMAGES.length)
    expect(images[0]).toHaveAttribute('src', INSTAGRAM_IMAGES[0])
  })

  it('lets the photo strip overlap the footer below', () => {
    const { container } = render(<InstagramStrip />)
    const grid = container.querySelector('.grid') as HTMLElement
    expect(grid.className).toContain('-mb-[120px]')
  })
})
