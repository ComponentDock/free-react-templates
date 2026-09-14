import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the heading and subtitle', () => {
    render(<VideoCta />)
    expect(screen.getByText('Watch the video')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Web Agency/i })).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoCta />)
    expect(screen.getByRole('button', { name: /Play video/i })).toBeInTheDocument()
  })

  it('renders the video thumbnail image', () => {
    render(<VideoCta />)
    const img = screen.getByRole('img', { name: 'Agency showreel' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
