import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { stripImages } from '../data'

describe('InstagramStrip', () => {
  it('renders the Instagram heading and one thumbnail per image', () => {
    render(<InstagramStrip />)
    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    for (const image of stripImages) {
      expect(screen.getByRole('link', { name: image.alt })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(stripImages.length)
  })
})
