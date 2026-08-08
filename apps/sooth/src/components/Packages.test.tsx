import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders the heading and three packages with prices', () => {
    render(<Packages />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Signature Packages' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Refresher' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Indulgence' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Ultimate Retreat' })).toBeInTheDocument()
    expect(screen.getByText('$149')).toBeInTheDocument()
    expect(screen.getByText('$249')).toBeInTheDocument()
    expect(screen.getByText('$449')).toBeInTheDocument()
  })

  it('marks the Indulgence package as Most Popular and lists features', () => {
    render(<Packages />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByText('90-minute signature massage')).toBeInTheDocument()
    expect(screen.getByText('Full-body ritual & scrub')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Book Package' })).toHaveLength(3)
  })
})
