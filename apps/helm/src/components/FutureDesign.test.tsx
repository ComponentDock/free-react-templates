import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FutureDesign } from './FutureDesign'

describe('FutureDesign', () => {
  it('renders the section label and heading', () => {
    render(<FutureDesign />)

    expect(screen.getByText('Design for the future')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /The technology for the future generation/,
      }),
    ).toBeInTheDocument()
  })

  it('renders four feature boxes with titles', () => {
    render(<FutureDesign />)

    expect(screen.getByText('Creative Technology')).toBeInTheDocument()
    expect(screen.getAllByText('World-class Quality').length).toBe(2)
    expect(screen.getByText('Deep Resources')).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<FutureDesign />)

    expect(screen.getByText(/Reiciendis provident eius ratione/)).toBeInTheDocument()
  })
})
