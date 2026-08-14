import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { GALLERY } from '../data'

describe('Gallery', () => {
  it('renders the subheading and heading', () => {
    render(<Gallery />)

    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'See the latest photos' }),
    ).toBeInTheDocument()
  })

  it('renders a strip of four or more photos', () => {
    const { container } = render(<Gallery />)

    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    expect(images[0]).toHaveAttribute('src', GALLERY[0])
  })
})
