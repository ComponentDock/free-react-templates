import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { News } from './News'

describe('News', () => {
  it('renders the band heading and subtitle', () => {
    render(<News />)

    expect(screen.getByText('Ideas & Publications')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Keep up to date' })).toBeInTheDocument()
  })

  it('renders four entries with a date, title, blurb, and Read more link', () => {
    render(<News />)

    const dates = screen.getAllByText('April 28, 2020')
    expect(dates).toHaveLength(4)
    for (const title of [
      'The Quiet Beauty of Raw Concrete',
      'Why Natural Light Changes Everything',
      'Materials That Age with Grace',
      'Small Spaces, Big Ideas',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Read more/ })).toHaveLength(4)
  })

  it('renders the Our Blog Posts button', () => {
    render(<News />)

    expect(screen.getByRole('link', { name: 'Our Blog Posts' })).toBeInTheDocument()
  })
})
