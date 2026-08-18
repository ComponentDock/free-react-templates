import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Instagram } from './Instagram'

const track = () => {
  const el = document.querySelector('[data-instagram-track]') as HTMLElement
  return el.style.transform
}

describe('Instagram', () => {
  it('renders the heading and all eight gallery tiles with an icon overlay', () => {
    render(<Instagram />)
    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()

    const tiles = screen.getAllByRole('link', { name: /View photo:/ })
    expect(tiles).toHaveLength(8)
    expect(tiles[0]).toHaveAttribute('href', '#instagram')
    expect(tiles[0]!.querySelector('svg')).not.toBeNull()
  })

  it('advances four tiles with next and wraps around', () => {
    render(<Instagram />)
    expect(track()).toBe('translateX(0%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next gallery' }))
    expect(track()).toBe('translateX(-50%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next gallery' }))
    expect(track()).toBe('translateX(0%)')
  })

  it('moves back with previous and wraps to the last page', () => {
    render(<Instagram />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous gallery' }))
    expect(track()).toBe('translateX(-50%)')

    fireEvent.click(screen.getByRole('button', { name: 'Previous gallery' }))
    expect(track()).toBe('translateX(0%)')
  })
})
