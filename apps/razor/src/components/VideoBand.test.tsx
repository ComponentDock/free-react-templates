import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoBand } from './VideoBand'

describe('VideoBand', () => {
  it('shows a play button and the video heading', () => {
    render(<VideoBand />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Watch Our Video Popular Hair Style/ }),
    ).toBeInTheDocument()
  })
})
