import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProfileBlock } from './ProfileBlock'
import { PROFILE } from '../data'

describe('ProfileBlock', () => {
  it('renders the heading, subtext, mission text, and five stars', () => {
    render(<ProfileBlock />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
      'Personalized design solutions',
    )
    expect(screen.getByText(PROFILE.subtext)).toBeInTheDocument()
    expect(screen.getByText(PROFILE.text)).toBeInTheDocument()
    expect(screen.getAllByLabelText('Star rating')).toHaveLength(5)
  })

  it('renders the Budget and Styles facts', () => {
    render(<ProfileBlock />)
    expect(screen.getByText('Budget')).toBeInTheDocument()
    expect(screen.getByText('$5,000')).toBeInTheDocument()
    expect(screen.getByText('Styles')).toBeInTheDocument()
    expect(screen.getByText('Glam, Bohemian')).toBeInTheDocument()
  })

  it('renders the View Gallery dark pill CTA', () => {
    render(<ProfileBlock />)
    expect(screen.getByRole('link', { name: 'View Gallery' })).toHaveAttribute('href', '#gallery')
  })
})
