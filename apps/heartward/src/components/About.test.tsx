import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We Are A Non-profit Organization',
    )
    expect(screen.getByText(/Heartward is dedicated/)).toBeInTheDocument()
  })

  it('renders the learn more link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '#features')
  })

  it('renders partner logos', () => {
    render(<About />)
    expect(screen.getByAltText('Partner 1')).toBeInTheDocument()
    expect(screen.getByAltText('Partner 5')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About Heartward')).toBeInTheDocument()
  })
})
