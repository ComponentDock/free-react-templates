import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LogoHeader } from './LogoHeader'

describe('LogoHeader', () => {
  it('renders the logo text', () => {
    render(<LogoHeader />)
    expect(screen.getByText('Scoop')).toBeInTheDocument()
  })

  it('renders the advertisement image', () => {
    render(<LogoHeader />)
    const img = screen.getByAltText('Advertisement')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })
})
