import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading, paragraphs and Read More link', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to Synod Church')
    expect(screen.getByText(/community of believers/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    const { container } = render(<About />)

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('alt', 'Welcome to Synod Church')
  })
})
