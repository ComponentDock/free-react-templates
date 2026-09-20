import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LastNews } from './LastNews'

describe('LastNews', () => {
  it('renders section heading', () => {
    render(<LastNews />)
    expect(screen.getByText('Our Last News')).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<LastNews />)
    expect(screen.getByText('The Evolution of Festival Sound Systems')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Headliners to Watch This Year')).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<LastNews />)
    expect(screen.getByText(/DJ Nexus/)).toBeInTheDocument()
    expect(screen.getByText(/Music Insider/)).toBeInTheDocument()
    expect(screen.getByText(/12 Comments/)).toBeInTheDocument()
    expect(screen.getByText(/28 Comments/)).toBeInTheDocument()
  })

  it('renders date badges', () => {
    render(<LastNews />)
    expect(screen.getByText('Mar 15')).toBeInTheDocument()
    expect(screen.getByText('Mar 10')).toBeInTheDocument()
  })

  it('renders post images', () => {
    render(<LastNews />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('renders post descriptions', () => {
    render(<LastNews />)
    expect(screen.getByText(/massive Funktion-One stacks/)).toBeInTheDocument()
    expect(screen.getByText(/Breaking artists/)).toBeInTheDocument()
  })
})
