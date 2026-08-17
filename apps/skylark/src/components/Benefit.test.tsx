import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Benefit } from './Benefit'
import { BENEFITS, BENEFIT_PHOTOS } from '../data'

describe('Benefit', () => {
  it('renders the section title, intro, and all four benefit items', () => {
    render(<Benefit />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Benefit' })).toBeInTheDocument()
    BENEFITS.forEach((item) => {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.description)).toBeInTheDocument()
    })
  })

  it('renders the 2x2 photo collage with alt text', () => {
    const { container } = render(<Benefit />)

    BENEFIT_PHOTOS.forEach((photo) => {
      expect(container.querySelectorAll(`img[src="${photo}"]`).length).toBe(1)
    })
    const imgs = container.querySelectorAll('img')
    expect(imgs.length).toBe(BENEFIT_PHOTOS.length)
    expect(imgs[0]).toHaveAttribute('alt', 'Adventure scene 1')
  })
})
