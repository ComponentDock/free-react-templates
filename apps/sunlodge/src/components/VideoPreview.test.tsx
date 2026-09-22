import { render, screen } from '@testing-library/react'
import { VideoPreview } from './VideoPreview'
import { describe, expect, it } from 'vitest'

describe('VideoPreview', () => {
  it('renders the Hotel Preview label', () => {
    render(<VideoPreview />)
    expect(screen.getByText('Hotel Preview')).toBeInTheDocument()
  })

  it('renders the play button with accessible label', () => {
    render(<VideoPreview />)
    expect(screen.getByRole('link', { name: /play hotel preview video/i })).toBeInTheDocument()
  })

  it('play button links to YouTube', () => {
    render(<VideoPreview />)
    const link = screen.getByRole('link', { name: /play hotel preview video/i })
    expect(link).toHaveAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
