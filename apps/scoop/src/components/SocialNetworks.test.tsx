import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialNetworks } from './SocialNetworks'

describe('SocialNetworks', () => {
  it('renders the section heading', () => {
    render(<SocialNetworks />)
    expect(screen.getByText('Social Networks')).toBeInTheDocument()
  })

  it('renders social network counts', () => {
    render(<SocialNetworks />)
    expect(screen.getAllByText('983').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('9835').length).toBe(1)
    expect(screen.getAllByText('36958').length).toBe(1)
  })

  it('renders subtext for networks', () => {
    render(<SocialNetworks />)
    expect(screen.getByText('Like our page')).toBeInTheDocument()
    expect(screen.getAllByText('Follow Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Subscribe').length).toBeGreaterThanOrEqual(1)
  })
})
