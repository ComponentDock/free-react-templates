import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders the heading', () => {
    render(<SocialLinks />)
    expect(screen.getByText('My Social Profiles')).toBeInTheDocument()
  })

  it('renders 5 social icons', () => {
    render(<SocialLinks />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
  })

  it('has accessible labels for each social link', () => {
    render(<SocialLinks />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })
})
