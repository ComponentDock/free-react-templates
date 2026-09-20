import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders play button', () => {
    render(<VideoCta />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders heading and subtext', () => {
    render(<VideoCta />)
    expect(screen.getByText(/watch this video/i)).toBeInTheDocument()
    expect(screen.getByText(/glimpse of last year/i)).toBeInTheDocument()
  })

  it('has parallax background', () => {
    const { container } = render(<VideoCta />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-fixed')
  })
})
