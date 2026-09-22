import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoHero } from './VideoHero'

describe('VideoHero', () => {
  it('renders the heading', () => {
    render(<VideoHero />)
    expect(screen.getByText(/Most Recommended Hotel/)).toBeInTheDocument()
  })

  it('has a parallax background', () => {
    const { container } = render(<VideoHero />)
    const bgDiv = container.querySelector('.bg-fixed')
    expect(bgDiv).toBeInTheDocument()
  })
})
