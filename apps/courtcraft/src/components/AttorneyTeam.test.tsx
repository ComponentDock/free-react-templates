import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AttorneyTeam } from './AttorneyTeam'
import { ATTORNEYS } from '../data'

describe('AttorneyTeam', () => {
  it('renders the section heading', () => {
    render(<AttorneyTeam />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Attorneys' })).toBeInTheDocument()
  })

  it('renders all 3 attorney names', () => {
    render(<AttorneyTeam />)

    for (const atty of ATTORNEYS) {
      expect(screen.getByRole('heading', { level: 3, name: atty.name })).toBeInTheDocument()
    }
  })

  it('renders all 3 attorney roles', () => {
    render(<AttorneyTeam />)

    for (const atty of ATTORNEYS) {
      expect(screen.getByText(atty.role)).toBeInTheDocument()
    }
  })

  it('renders attorney images with alt text', () => {
    render(<AttorneyTeam />)

    for (const atty of ATTORNEYS) {
      expect(screen.getByRole('img', { name: atty.name })).toHaveAttribute('src', atty.image)
    }
  })
})
