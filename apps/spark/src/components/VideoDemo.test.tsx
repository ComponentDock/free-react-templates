import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoDemo } from './VideoDemo'

describe('VideoDemo', () => {
  it('renders the section heading', () => {
    render(<VideoDemo />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('See Spark in Action')
  })

  it('renders the blurb', () => {
    render(<VideoDemo />)
    expect(screen.getByText(/Watch how Spark transforms/i)).toBeInTheDocument()
  })

  it('renders the video placeholder image', () => {
    render(<VideoDemo />)
    const img = screen.getByRole('img', { name: /spark demo video placeholder/i })
    expect(img).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<VideoDemo />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders playback badges', () => {
    render(<VideoDemo />)
    expect(screen.getByText('HD Quality')).toBeInTheDocument()
    expect(screen.getByText('Live Demo')).toBeInTheDocument()
    expect(screen.getByText('3 Minutes')).toBeInTheDocument()
  })
})
