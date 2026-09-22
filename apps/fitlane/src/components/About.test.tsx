import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about fitlane/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const image = screen.getByRole('img', { name: /fitlane gym/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders the call-to-action link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
