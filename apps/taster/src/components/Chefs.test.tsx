import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Chefs } from './Chefs'

describe('Chefs', () => {
  it('renders the section heading', () => {
    render(<Chefs />)
    expect(screen.getByRole('heading', { level: 2, name: /meet the chefs/i })).toBeInTheDocument()
  })

  it('renders 2 chef profiles with names and roles', () => {
    render(<Chefs />)
    expect(screen.getByText('Daniel Graham')).toBeInTheDocument()
    expect(screen.getByText('Nick Browning')).toBeInTheDocument()
    const roles = screen.getAllByText('Master Chef')
    expect(roles).toHaveLength(2)
  })

  it('renders social icons for each chef', () => {
    render(<Chefs />)
    const facebookLinks = screen.getAllByRole('link', { name: /facebook/i })
    expect(facebookLinks).toHaveLength(2)
    const twitterLinks = screen.getAllByRole('link', { name: /twitter/i })
    expect(twitterLinks).toHaveLength(2)
    const instagramLinks = screen.getAllByRole('link', { name: /instagram/i })
    expect(instagramLinks).toHaveLength(2)
  })
})
