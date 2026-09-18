import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders four project items', () => {
    render(<Gallery />)
    const items = screen.getAllByText('Floride Chemicals Factory')
    expect(items).toHaveLength(8) // 4 visible + 4 overlay
  })

  it('renders numbered labels', () => {
    render(<Gallery />)
    expect(screen.getAllByText('01.').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('02.').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('03.').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('04.').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Read more links', () => {
    render(<Gallery />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(4)
  })

  it('renders project images from picsum', () => {
    render(<Gallery />)
    const imgs = screen.getAllByRole('img')
    imgs.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
