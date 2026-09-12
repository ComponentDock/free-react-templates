import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the play button and heading', () => {
    render(<Video />)

    expect(screen.getByRole('link', { name: /Play video/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Everyone wants to be unique/ }),
    ).toBeInTheDocument()
  })
})
