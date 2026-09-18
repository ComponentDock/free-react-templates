import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<VideoSection />)
    expect(screen.getByText('Watch Modern Agricultural Farming')).toBeInTheDocument()
  })
})
