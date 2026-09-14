import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutVideo } from './AboutVideo'

describe('AboutVideo', () => {
  it('renders the section heading', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('heading', { name: /See Mechbot in Action/i })).toBeInTheDocument()
  })

  it('renders the video thumbnail image', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('img', { name: /demonstration video thumbnail/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders a play button', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
