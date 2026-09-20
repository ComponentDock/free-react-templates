import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders heading and subtitle', () => {
    render(<VideoSection />)
    expect(screen.getByText('Conference Highlights and Recaps')).toBeInTheDocument()
    expect(screen.getByText('Brand new app to blow your mind')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<VideoSection />)
    expect(screen.getByText('Get Started now')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<VideoSection />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })
})
