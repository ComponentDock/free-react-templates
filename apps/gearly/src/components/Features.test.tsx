import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows the section heading and blurb with a See Courses link', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Our feature/i })).toBeInTheDocument()
    expect(screen.getByText(/Why choose us/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See Courses' })).toHaveAttribute('href', '#courses')
  })

  it('renders the three feature items', () => {
    render(<Features />)
    expect(screen.getByText('Unlimited Car Support')).toBeInTheDocument()
    expect(screen.getByText('Driving School Insures')).toBeInTheDocument()
    expect(screen.getByText('Any Time Any Location')).toBeInTheDocument()
  })
})
