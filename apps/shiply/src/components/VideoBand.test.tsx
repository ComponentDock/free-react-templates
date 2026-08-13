import { render, screen } from '@testing-library/react'
import { VideoBand } from './VideoBand'
import { describe, expect, it } from 'vitest'

describe('VideoBand', () => {
  it('renders the play button and the video CTA heading', () => {
    const { container } = render(<VideoBand />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /View Our Services By Watching This Short Video/,
      }),
    ).toBeInTheDocument()
  })
})
