import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InstagramStrip } from './InstagramStrip'
import { instagramHandle, instagramHeading, instagramTiles } from '../data'

describe('InstagramStrip', () => {
  it('shows the heading, handle and six photo tiles', () => {
    const { container } = render(<InstagramStrip />)

    expect(screen.getByRole('heading', { name: instagramHeading })).toBeInTheDocument()
    expect(screen.getByText(instagramHandle)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(instagramTiles.length)
  })
})
