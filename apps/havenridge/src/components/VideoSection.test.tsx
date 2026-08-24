import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the section heading', () => {
    render(<VideoSection />)
    expect(screen.getByText('Modern House Video')).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders the section description', () => {
    render(<VideoSection />)
    expect(screen.getByText(/virtual tour/i)).toBeInTheDocument()
  })
})
