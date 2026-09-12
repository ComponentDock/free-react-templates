import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /Digital design and development company/i }),
    ).toBeInTheDocument()
  })

  it('renders the explore button', () => {
    render(<About />)
    expect(screen.getByText('Explore Us')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /about doflo/i })).toBeInTheDocument()
  })
})
