import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the heading and a play button', () => {
    render(<Video />)

    expect(screen.getByRole('heading', { name: 'Description With Video' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play The Video' })).toBeInTheDocument()
  })
})
