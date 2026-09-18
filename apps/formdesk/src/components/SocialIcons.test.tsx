import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialIcons } from './SocialIcons'

describe('SocialIcons', () => {
  it('renders three social icon links', () => {
    render(<SocialIcons />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('Facebook icon has correct href', () => {
    render(<SocialIcons />)

    expect(screen.getByLabelText('Facebook')).toHaveAttribute('href', 'https://www.facebook.com/')
  })

  it('Twitter icon has correct href', () => {
    render(<SocialIcons />)

    expect(screen.getByLabelText('Twitter')).toHaveAttribute('href', 'https://twitter.com/')
  })

  it('Instagram icon has correct href', () => {
    render(<SocialIcons />)

    expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', 'https://www.instagram.com/')
  })

  it('all icons open in new tab', () => {
    render(<SocialIcons />)

    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders with colored circle backgrounds', () => {
    render(<SocialIcons />)

    const facebook = screen.getByLabelText('Facebook')
    expect(facebook).toHaveStyle({ backgroundColor: '#3b5998' })

    const twitter = screen.getByLabelText('Twitter')
    expect(twitter).toHaveStyle({ backgroundColor: '#1da1f2' })

    const instagram = screen.getByLabelText('Instagram')
    expect(instagram).toHaveStyle({ backgroundColor: '#e1306c' })
  })
})
