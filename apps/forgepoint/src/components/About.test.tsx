import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Safe Industrial Solutions/i }),
    ).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/logistics operator providing full range/i)).toBeInTheDocument()
  })

  it('renders the Our Services button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders the Our Mission overlay', () => {
    render(<About />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
  })

  it('renders the right-side image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /industrial facility/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
