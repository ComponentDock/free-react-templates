import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title, featured post, and side posts', () => {
    render(<Blog />)

    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Every Single Update' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'How Your Donations Changed Lives in 2024' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Volunteer Spotlight: Meet Our Amazing Team' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Building Schools: Our Education Initiative Update' }),
    ).toBeInTheDocument()
  })

  it('displays dates and comment counts for blog posts', () => {
    render(<Blog />)

    expect(screen.getByText('March 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('12 Comments')).toBeInTheDocument()
    expect(screen.getByText('March 10, 2024')).toBeInTheDocument()
  })

  it('displays category labels for each post', () => {
    render(<Blog />)

    expect(screen.getByText('Impact Stories')).toBeInTheDocument()
    expect(screen.getByText('Volunteers')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
  })
})
