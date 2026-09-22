import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('link', { name: 'Play video' })).toBeInTheDocument()
  })
})
