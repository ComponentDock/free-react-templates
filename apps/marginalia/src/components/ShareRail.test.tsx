import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ShareRail } from './ShareRail'
import { socialLabels, socialLinks } from '../data'

describe('ShareRail', () => {
  it('renders a fixed vertical rail of social share links with accessible names', () => {
    const { container } = render(<ShareRail />)
    for (const name of socialLinks) {
      expect(
        screen.getByRole('link', { name: `Share on ${socialLabels[name]}` }),
      ).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Back to top' })).toBeInTheDocument()
    expect(container.querySelector('aside')?.className).toContain('fixed')
  })
})
