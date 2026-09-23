import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the section heading', () => {
    render(<VideoSection />)
    expect(screen.getByRole('heading', { name: /Video Showcase/i })).toBeInTheDocument()
  })

  it('renders the video thumbnail and play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('img', { name: /Video showcase thumbnail/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Play video/i })).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<VideoSection />)
    expect(screen.getByText(/Watch our creative process/i)).toBeInTheDocument()
    expect(screen.getByText(/Our studio combines/i)).toBeInTheDocument()
  })
})
