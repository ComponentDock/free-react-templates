import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostChip, PostMeta, PostThumb } from './PostBits'
import { imgUrl } from '../data'

describe('PostChip', () => {
  it('renders the category label', () => {
    render(<PostChip category="Travel" />)
    expect(screen.getByText('Travel')).toBeInTheDocument()
  })
})

describe('PostMeta', () => {
  it('renders the author and date in one meta line', () => {
    render(<PostMeta author="Katy Liu" date="Sep 29, 2017 at 9:48 am" />)
    expect(screen.getByText(/Katy Liu on Sep 29, 2017 at 9:48 am/)).toBeInTheDocument()
  })
})

describe('PostThumb', () => {
  it('renders a seeded placeholder image with alt text', () => {
    render(<PostThumb seed="atlas-3" alt="A headline" width={600} height={400} />)
    const img = screen.getByRole('img', { name: 'A headline' })
    expect(img).toHaveAttribute('src', imgUrl('atlas-3', 600, 400))
    expect(img).toHaveAttribute('loading', 'lazy')
  })
})
