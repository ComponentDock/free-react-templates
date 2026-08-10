import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the hello heading and agency tagline', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'Hello! Pose' })).toBeInTheDocument()
    expect(screen.getByText('A Professional Model Agency')).toBeInTheDocument()
  })

  it('renders lorem paragraphs about the agency', () => {
    render(<About />)

    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/Separated they live in Bookmarksgrove/)).toBeInTheDocument()
  })
})
