import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)
    expect(screen.getByText('Welcome to Piston')).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})
