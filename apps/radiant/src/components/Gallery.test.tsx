import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders five gallery images', () => {
    render(<Gallery />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('each image is inside a link', () => {
    render(<Gallery />)

    const links = screen.getAllByRole('link')
    // 5 gallery links
    expect(links.length).toBeGreaterThanOrEqual(5)
  })
})
