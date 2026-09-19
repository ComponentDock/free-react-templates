import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about heading and content', () => {
    render(<About />)
    expect(screen.getByText(/we've made a life/i)).toBeInTheDocument()
    expect(screen.getByText(/brand new app/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get started now/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('Smartwatch being used')
    expect(img).toBeInTheDocument()
  })
})
