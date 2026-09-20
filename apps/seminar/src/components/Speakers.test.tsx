import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the section heading', () => {
    render(<Speakers />)
    expect(screen.getByRole('heading', { level: 2, name: 'Speakers' })).toBeInTheDocument()
  })

  it('renders all 4 speakers', () => {
    render(<Speakers />)
    expect(screen.getByRole('heading', { level: 3, name: 'Emely Peters' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Alex Anchor' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Aaron Thomas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Chris Mathews' })).toBeInTheDocument()
  })

  it('renders speaker roles', () => {
    render(<Speakers />)
    const roles = screen.getAllByText('Web Designer')
    expect(roles.length).toBe(4)
  })

  it('renders speaker images', () => {
    render(<Speakers />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('renders social icons for each speaker', () => {
    render(<Speakers />)
    const globeLinks = screen.getAllByLabelText('Globe')
    expect(globeLinks.length).toBe(4)
  })

  it('has the speakers section id', () => {
    const { container } = render(<Speakers />)
    expect(container.querySelector('#speakers')).toBeInTheDocument()
  })
})
