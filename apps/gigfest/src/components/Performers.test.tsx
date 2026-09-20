import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Performers } from './Performers'

describe('Performers', () => {
  it('renders the section heading and four performer cards', () => {
    render(<Performers />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Performer')

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)

    expect(screen.getByText('Mr. Zosoldos')).toBeInTheDocument()
    expect(screen.getByText('Protik Hasan')).toBeInTheDocument()
    expect(screen.getByText('Salmon Vicky')).toBeInTheDocument()
    expect(screen.getByText('Filaris Habol')).toBeInTheDocument()
  })

  it('shows each performer role', () => {
    render(<Performers />)
    const roles = screen.getAllByText('Acoustic drum')
    expect(roles).toHaveLength(4)
  })
})
