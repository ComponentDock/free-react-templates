import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { describe, expect, it } from 'vitest'

const expectedNames = ['Danny George', 'Andrew Horton', 'Georgia Foster', 'Sue Burns']

describe('Team', () => {
  it('renders the section title, Join us button, and four cleaner cards', () => {
    render(<Team />)
    expect(screen.getByText('Our team')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Better Life For Everyone' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join us' })).toHaveClass('btn-pill')
    for (const name of expectedNames) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByAltText(`${name}, Cleaner`)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Cleaner')).toHaveLength(4)
  })
})
