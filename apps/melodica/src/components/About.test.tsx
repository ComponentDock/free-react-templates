import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and bio text', () => {
    render(<About />)

    expect(screen.getByText('About The Artist')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Crafting Sound Since 2010')
    expect(screen.getByText(/born from a passion/i)).toBeInTheDocument()
  })

  it('renders the artist image', () => {
    render(<About />)

    const img = screen.getByRole('img', { name: /artist performing/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('melodica-artist'))
  })

  it('renders three stat counters', () => {
    render(<About />)

    expect(screen.getByText('Albums')).toBeInTheDocument()
    expect(screen.getByText('Fans')).toBeInTheDocument()
    expect(screen.getByText('Concerts')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('48')).toBeInTheDocument()
    expect(screen.getByText('230')).toBeInTheDocument()
  })

  it('displays stat values with plus sign', () => {
    render(<About />)

    const plusSigns = screen.getAllByText('+')
    expect(plusSigns.length).toBe(3)
  })
})
