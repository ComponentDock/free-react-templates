import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('shows a photo framed by a gold offset border with a circular play button overlay', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /congregation/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(screen.getByRole('button', { name: 'Play about video' })).toHaveClass('rounded-full')
  })

  it('shows the heading, sub-line, body copy and Watch Video link', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Our Church' })).toBeInTheDocument()
    expect(screen.getByText('We are helping people with the Cretor!')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /watch video/i })).toBeInTheDocument()
  })
})
