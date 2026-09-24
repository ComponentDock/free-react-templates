import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Editorial } from './Editorial'

describe('Editorial', () => {
  it("renders the Editor's Pick heading", () => {
    render(<Editorial />)
    expect(screen.getByText("Editor's Pick")).toBeInTheDocument()
  })

  it('renders the World News heading', () => {
    render(<Editorial />)
    expect(screen.getByText('World News')).toBeInTheDocument()
  })

  it('renders editorial post dates', () => {
    render(<Editorial />)
    const dates = screen.getAllByText('February 11, 2018')
    expect(dates.length).toBeGreaterThanOrEqual(6)
  })
})
