import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section title and all four feature cards', () => {
    render(<Features />)

    expect(screen.getByText('Awesome Feature')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'How Could You Help' })).toBeInTheDocument()

    for (const title of [
      'Give Donation',
      'Become A Volunteer',
      'Child Education',
      'Quick Fundraise',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
