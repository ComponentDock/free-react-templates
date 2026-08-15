import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { videoPlayLabel, videoTitle } from '../data'
import { VideoBanner } from './VideoBanner'

describe('VideoBanner', () => {
  it('renders the section with a background image and play button', () => {
    const { container } = render(<VideoBanner />)
    expect(screen.getByLabelText(videoTitle)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: videoPlayLabel })).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })
})
