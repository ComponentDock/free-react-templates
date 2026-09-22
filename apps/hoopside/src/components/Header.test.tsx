import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Hoop')).toBeInTheDocument()
    expect(screen.getByText('side')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    const links = ['Home', 'About', 'Player', 'Shop', 'Pages', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0)
    })
  })

  it('renders top bar contact info', () => {
    render(<Header />)
    expect(screen.getByText('Ourteam@hoopside.com')).toBeInTheDocument()
    expect(screen.getByText('Support@hoopside.com')).toBeInTheDocument()
  })

  it('renders cart info', () => {
    render(<Header />)
    expect(screen.getByText('( 2 items )')).toBeInTheDocument()
  })
})
