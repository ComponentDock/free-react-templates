import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BADGES, RATING } from '../data/site'
import { ProductMedia } from './ProductMedia'

const COLOUR = {
  name: 'Midnight',
  sw: '#1c1d21',
  src: 'https://picsum.photos/seed/overtone-midnight/900/600',
  alt: 'Matte black over-ear headphones',
  stock: 'In stock, ships tomorrow',
}

describe('ProductMedia', () => {
  it('renders the frame with its photograph, caption and three badges', () => {
    const { container } = render(<ProductMedia colour={COLOUR} swapping={false} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', COLOUR.src)
    expect(screen.getByText('Midnight', { selector: '.ot-caption' })).toBeInTheDocument()
    expect(container.querySelector('.ot-caption-dot')).toHaveStyle(`background: ${COLOUR.sw}`)

    const badges = screen.getByRole('list', { name: 'Highlights' })
    expect(badges.querySelectorAll('li')).toHaveLength(BADGES.length)
    expect(screen.getByText('−35 dB')).toBeInTheDocument()
    expect(screen.getByText('noise cancelling')).toBeInTheDocument()
  })

  it('adds the fade class only while the swap is running', () => {
    const { container, rerender } = render(<ProductMedia colour={COLOUR} swapping={false} />)
    expect(container.querySelector('.ot-frame')?.className).toBe('ot-frame')

    rerender(<ProductMedia colour={COLOUR} swapping />)
    expect(container.querySelector('.ot-frame')?.className).toBe('ot-frame is-swapping')
  })

  it('keeps the stars decorative', () => {
    render(<ProductMedia colour={COLOUR} swapping={false} />)
    // the rating lives in the info column; this file only owns the media
    expect(screen.queryByText(RATING.stars)).toBeNull()
  })
})
