import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialIcons } from './SocialIcons'
import { socialLabel, socialNames } from '../data'

describe('SocialIcons', () => {
  it('renders a link per social name with the brand label', () => {
    render(<SocialIcons />)
    for (const name of socialNames) {
      expect(screen.getByRole('link', { name: socialLabel(name) })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link')).toHaveLength(socialNames.length)
  })

  it('renders custom names and merges the className', () => {
    const { container } = render(<SocialIcons names={['Twitter']} className="mt-4" />)
    expect(screen.getByRole('link', { name: socialLabel('Twitter') })).toBeInTheDocument()
    expect(container.firstElementChild).toHaveClass('mt-4')
  })
})
