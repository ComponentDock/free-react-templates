import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SideImage } from './SideImage'

describe('SideImage', () => {
  it('renders an image with the correct alt text', () => {
    render(<SideImage />)
    expect(screen.getByRole('img', { name: /registration illustration/i })).toBeInTheDocument()
  })

  it('uses a seeded picsum photo', () => {
    render(<SideImage />)
    const img = screen.getByRole('img', { name: /registration illustration/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/regvale/600/800')
  })

  it('is hidden on small screens via the container', () => {
    render(<SideImage />)
    const container = screen.getByRole('img').parentElement
    expect(container).toHaveClass('hidden')
  })
})
