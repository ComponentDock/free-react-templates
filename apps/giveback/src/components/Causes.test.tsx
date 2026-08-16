import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'
import { causes } from '../data'

describe('Causes', () => {
  it('renders three cause cards with goal, raised, and donate buttons', () => {
    render(<Causes />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Fundraising Programs' }),
    ).toBeInTheDocument()
    for (const cause of causes) {
      expect(screen.getByRole('heading', { level: 3, name: cause.title })).toBeInTheDocument()
      expect(screen.getByText(cause.goal)).toBeInTheDocument()
      expect(screen.getByText(cause.raised)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /^donate$/i })).toHaveLength(3)
    for (const donate of screen.getAllByRole('link', { name: /^donate$/i })) {
      expect(donate).toHaveAttribute('href', '#contact')
    }
  })

  it('renders a photo per card', () => {
    render(<Causes />)
    for (const cause of causes) {
      expect(screen.getByAltText(cause.title)).toHaveAttribute('src', cause.image)
    }
  })
})
