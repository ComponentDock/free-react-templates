import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the photo with the rotated years badge', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /Construction site/ })).toBeInTheDocument()
    expect(screen.getByText(about.badgeYears)).toBeInTheDocument()
    expect(screen.getByText(about.badgeCaption)).toBeInTheDocument()
  })

  it('renders the kicker, heading, paragraph, and sub-heading', () => {
    render(<About />)
    expect(screen.getByText(about.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByText(about.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: about.subHeading })).toBeInTheDocument()
  })

  it('renders the four mini services with icons', () => {
    render(<About />)
    for (const service of about.miniServices) {
      expect(screen.getByRole('heading', { level: 4, name: service.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(about.miniServices[0].blurb)).toHaveLength(4)
  })
})
