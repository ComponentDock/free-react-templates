import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandButton } from './BrandButton'

describe('BrandButton', () => {
  it('renders a button by default', () => {
    render(<BrandButton>Explore Now</BrandButton>)
    expect(screen.getByRole('button', { name: /explore now/i })).toBeInTheDocument()
  })

  it('renders an anchor when href is provided', () => {
    render(<BrandButton href="#jobs">View Jobs</BrandButton>)
    const link = screen.getByRole('link', { name: /view jobs/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#jobs')
  })
})
