import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading', () => {
    render(<Projects />)
    expect(screen.getByText('Our Recent Projects')).toBeInTheDocument()
  })

  it('renders eight project cards', () => {
    render(<Projects />)
    const links = screen.getAllByLabelText(/view branding/i)
    expect(links).toHaveLength(8)
  })
})
