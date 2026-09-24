import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialIcons } from './SocialIcons'
import { socials } from '../data'

describe('SocialIcons', () => {
  it('renders all social icon links', () => {
    render(<SocialIcons />)
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('each social link points to #top', () => {
    render(<SocialIcons />)
    for (const social of socials) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', '#top')
    }
  })
})
