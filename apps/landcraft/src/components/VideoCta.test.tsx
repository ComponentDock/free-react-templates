import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import VideoCta from './VideoCta'

describe('VideoCta', () => {
  it('renders the play button', () => {
    render(<VideoCta />)
    expect(screen.getByRole('link', { name: /play video/i })).toBeInTheDocument()
  })
})
