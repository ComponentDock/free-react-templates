import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the heading, thumbnail and play button', () => {
    render(<Video />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'See Ripply in action' }),
    ).toBeInTheDocument()
    expect(screen.getByAltText('Video thumbnail')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
