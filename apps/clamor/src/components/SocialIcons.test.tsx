import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialIcons } from './SocialIcons'
import { socialLabel, socialNames } from '../data'

describe('SocialIcons', () => {
  it('renders a labeled link per social name in the default set', () => {
    render(<SocialIcons />)
    for (const name of socialNames) {
      expect(screen.getByRole('link', { name: socialLabel(name) })).toBeInTheDocument()
    }
  })

  it('renders only the provided subset of names', () => {
    render(<SocialIcons names={['Facebook']} />)
    expect(screen.getByRole('link', { name: socialLabel('Facebook') })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: socialLabel('Instagram') })).not.toBeInTheDocument()
  })
})
