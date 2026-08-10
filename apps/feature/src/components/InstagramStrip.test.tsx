import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramStrip } from './InstagramStrip'

describe('InstagramStrip', () => {
  it('renders the Instagram heading and eight photo tiles', () => {
    render(<InstagramStrip />)
    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(8)
    expect(screen.getByRole('link', { name: 'Instagram photo 1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram photo 8' })).toBeInTheDocument()
  })
})
