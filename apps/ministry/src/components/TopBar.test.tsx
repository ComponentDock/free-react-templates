import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders location text', () => {
    render(<TopBar />)
    expect(screen.getByText(/Mountain View/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    const links = screen.getAllByRole('link', {
      name: /social media|facebook|twitter|instagram|dribbble/i,
    })
    expect(links.length).toBe(4)
  })
})
