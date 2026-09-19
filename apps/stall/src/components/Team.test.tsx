import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading and 3 team members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Team')

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('renders social links for each member', () => {
    render(<Team />)

    const fbLinks = screen.getAllByRole('link', { name: /on Facebook/ })
    const twLinks = screen.getAllByRole('link', { name: /on Twitter/ })
    const liLinks = screen.getAllByRole('link', { name: /on LinkedIn/ })

    expect(fbLinks.length).toBe(3)
    expect(twLinks.length).toBe(3)
    expect(liLinks.length).toBe(3)
  })
})
