import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the subtitle', () => {
    render(<Intro />)
    expect(screen.getByText('Something new')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Intro />)
    expect(screen.getByText('An Extraordinary Experience')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Intro />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders two images', () => {
    render(<Intro />)
    expect(screen.getByAltText('Elegant dining setup')).toBeInTheDocument()
    expect(screen.getByAltText('Gourmet presentation')).toBeInTheDocument()
  })
})
