import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the About Me heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument()
  })

  it('displays two service cards', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web Application' })).toBeInTheDocument()
  })

  it('shows the counter', () => {
    render(<About />)
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('Finished Projects')).toBeInTheDocument()
  })
})
