import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Gaze')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Gallery', 'Artists', 'Shop', 'News', 'Contact']
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('nav links have correct href anchors', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#gallery')
    expect(screen.getByRole('link', { name: 'Artists' })).toHaveAttribute('href', '#artists')
    expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute('href', '#shop')
    expect(screen.getByRole('link', { name: 'News' })).toHaveAttribute('href', '#news')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })
})
