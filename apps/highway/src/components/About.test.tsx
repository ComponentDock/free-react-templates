import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Choose A Perfect Car' })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/best car rental experience/)).toBeInTheDocument()
    expect(screen.getByText(/commitment to quality service/)).toBeInTheDocument()
  })

  it('renders the View Fleet link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'View Fleet' })).toHaveAttribute('href', '#fleet')
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'Choose a perfect car' })).toBeInTheDocument()
  })
})
