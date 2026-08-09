import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialRail } from './SocialRail'

describe('SocialRail', () => {
  it('renders Facebook, Twitter, and Instagram links in bold dark type', () => {
    render(<SocialRail />)
    for (const label of ['Facebook', 'Twitter', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
