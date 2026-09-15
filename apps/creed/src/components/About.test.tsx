import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the scripture quote heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /blessed is the one who takes refuge/i,
    )
  })

  it('shows descriptive text about the church', () => {
    render(<About />)
    expect(screen.getByText(/community of believers/i)).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /church community gathering/i })
    expect(img).toBeInTheDocument()
  })
})
