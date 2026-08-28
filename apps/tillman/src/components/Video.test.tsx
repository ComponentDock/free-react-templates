import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Video } from './Video'

describe('Video', () => {
  it('renders the play button', () => {
    render(<Video />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
