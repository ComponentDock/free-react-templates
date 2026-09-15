import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Every Single Update')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders the featured blog post', () => {
    render(<Blog />)
    expect(screen.getByText('How Your Donations Changed Lives This Quarter')).toBeInTheDocument()
  })

  it('renders the smaller blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Volunteer Spotlight: Stories from the Field')).toBeInTheDocument()
    expect(
      screen.getByText('New Education Initiative Launches in Southeast Asia'),
    ).toBeInTheDocument()
    expect(screen.getByText('Annual Gala Raises Record Funds for Clean Water')).toBeInTheDocument()
  })
})
