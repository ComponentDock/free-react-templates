import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialIcons } from './SocialIcons'
import { socialLabel, socialNames } from '../data'

describe('SocialIcons', () => {
  it('renders every social link with an accessible label', () => {
    render(<SocialIcons />)

    for (const name of socialNames) {
      expect(screen.getByRole('link', { name: socialLabel(name) })).toBeInTheDocument()
    }
  })

  it('renders a svg glyph per social', () => {
    render(<SocialIcons />)
    expect(document.querySelectorAll('svg')).toHaveLength(socialNames.length)
  })

  it('honors a custom name list and className', () => {
    render(<SocialIcons names={['Facebook']} className="gap-8" />)
    expect(screen.getByRole('link', { name: socialLabel('Facebook') })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: socialLabel('Twitter') })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: socialLabel('Facebook') }).parentElement).toHaveClass(
      'gap-8',
    )
  })
})
