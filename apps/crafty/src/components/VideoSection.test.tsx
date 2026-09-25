import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the heading, description, and play button', () => {
    render(<VideoSection />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('From the root')
    expect(screen.getByText(/our creative process combines/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('has a video thumbnail image', () => {
    render(<VideoSection />)

    const img = screen.getByRole('img', { name: 'Crafting video thumbnail' })
    expect(img).toBeInTheDocument()
  })
})
