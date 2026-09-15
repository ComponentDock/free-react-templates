import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section heading', () => {
    render(<News />)
    expect(screen.getByText('News & Updates')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<News />)
    expect(screen.getByText('How Your Donations Changed Lives This Quarter')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Spotlight: Stories from the Field')).toBeInTheDocument()
    expect(
      screen.getByText('New Education Initiative Launches in Southeast Asia'),
    ).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<News />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders category tags', () => {
    render(<News />)
    expect(screen.getByText('Impact Report')).toBeInTheDocument()
    expect(screen.getByText('Volunteers')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
  })
})
