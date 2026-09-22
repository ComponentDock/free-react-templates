import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /create a healthy life you love/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<About />)
    expect(screen.getByText(/almost before we knew it/i)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/praesent porttitor/i)).toBeInTheDocument()
  })

  it('renders trust icons with labels', () => {
    render(<About />)
    expect(screen.getByText('Caring')).toBeInTheDocument()
    expect(screen.getByText('Trusted')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /wellness lifestyle/i })).toBeInTheDocument()
  })
})
