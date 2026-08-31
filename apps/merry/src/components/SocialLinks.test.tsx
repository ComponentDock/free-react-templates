import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders social icons and component dock link', () => {
    render(<SocialLinks />)
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
    expect(screen.getByLabelText('Component Dock website')).toBeInTheDocument()
  })
})
