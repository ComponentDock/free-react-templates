import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders both about sections', () => {
    render(<About />)
    expect(screen.getByText("Let's Build Together")).toBeInTheDocument()
    expect(screen.getByText('Open for Collaboration')).toBeInTheDocument()
  })

  it('renders section numbers', () => {
    render(<About />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders section labels', () => {
    render(<About />)
    expect(screen.getByText('Infrastructure')).toBeInTheDocument()
    expect(screen.getByText('Collaborate')).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<About />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('has correct about section id', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<About />)
    const imgs = screen.getAllByRole('img')
    expect(imgs[0]).toHaveAttribute('alt', "Let's Build Together")
    expect(imgs[1]).toHaveAttribute('alt', 'Open for Collaboration')
  })
})
