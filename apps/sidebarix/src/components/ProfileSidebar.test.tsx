import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProfileSidebar } from './ProfileSidebar'

describe('ProfileSidebar', () => {
  it('renders the profile photo', () => {
    render(<ProfileSidebar />)
    const img = screen.getByAltText('Dan Williams profile photo')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('displays the profile name and verified badge', () => {
    render(<ProfileSidebar />)
    expect(screen.getByText('Dan Williams')).toBeInTheDocument()
    expect(screen.getByLabelText('Verified')).toBeInTheDocument()
  })

  it('shows photo and follower stats', () => {
    render(<ProfileSidebar />)
    expect(screen.getByText(/892 Photos/)).toBeInTheDocument()
    expect(screen.getByText(/56k Followers/)).toBeInTheDocument()
  })

  it('renders the bio paragraph', () => {
    render(<ProfileSidebar />)
    expect(screen.getByText(/Passionate photographer/)).toBeInTheDocument()
  })

  it('displays favourite tags', () => {
    render(<ProfileSidebar />)
    expect(screen.getByText('Favourite Tags')).toBeInTheDocument()
    expect(screen.getByText(/nature, portrait/)).toBeInTheDocument()
  })

  it('shows activity and location', () => {
    render(<ProfileSidebar />)
    expect(screen.getByText('Professional Photographer')).toBeInTheDocument()
    expect(screen.getByText('New York, USA')).toBeInTheDocument()
  })

  it('renders fav profiles as linked avatars', () => {
    render(<ProfileSidebar />)
    const links = screen.getAllByRole('link', { name: /View .* profile/ })
    expect(links).toHaveLength(5)
    links.forEach((link) => {
      const img = link.querySelector('img')
      expect(img).toBeInTheDocument()
    })
  })

  it('has accessible sidebar landmark', () => {
    render(<ProfileSidebar />)
    expect(screen.getByRole('complementary', { name: 'Profile sidebar' })).toBeInTheDocument()
  })
})
