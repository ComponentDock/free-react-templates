import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { videoPlayLabel, videoTitle } from '../data'
import { VideoSection } from './VideoSection'

describe('VideoSection', () => {
  it('renders the cursive headline and the circular play button', () => {
    render(<VideoSection />)
    expect(screen.getByRole('heading', { level: 2, name: videoTitle })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: videoPlayLabel })).toBeInTheDocument()
  })
})
