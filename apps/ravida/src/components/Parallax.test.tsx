import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Parallax } from './Parallax'

describe('Parallax', () => {
  it('renders play button', () => {
    render(<Parallax />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('has parallax background class', () => {
    const { container } = render(<Parallax />)
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    // bg-fixed is Tailwind for background-attachment: fixed
    expect(section?.className).toContain('bg-fixed')
  })
})
