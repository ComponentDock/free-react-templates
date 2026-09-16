import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading and description', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'Who we are' })).toBeInTheDocument()
    expect(screen.getAllByText(/Heaven fruitful/).length).toBeGreaterThan(0)
  })

  it('renders the Read More button', () => {
    render(<About />)

    expect(screen.getByRole('button', { name: 'Read More' })).toBeInTheDocument()
  })

  it('shows the about image with since badge', () => {
    render(<About />)

    const image = screen.getByRole('img', { name: 'Construction team at work' })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(screen.getByText('1994')).toBeInTheDocument()
    expect(screen.getByText('Since')).toBeInTheDocument()
  })
})
