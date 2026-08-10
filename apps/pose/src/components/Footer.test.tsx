import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site brand and blurb', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pose' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders the Recent Blog column', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: "Asia's Next Top Model" })).toBeInTheDocument()
  })

  it('renders the Site Links column', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Site Links' })).toBeInTheDocument()
    for (const label of ['Home', 'Models', 'Services', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Have a Questions? column', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Have a Questions?' })).toBeInTheDocument()
    expect(
      screen.getByText(/198 West 21th Street, Suite 721, New York NY 10016/),
    ).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Pose on facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pose on twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pose on instagram' })).toBeInTheDocument()
  })
})
