import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the heading and 3 article cards', () => {
    render(<News />)

    expect(screen.getByRole('heading', { level: 2, name: 'On The News' })).toBeInTheDocument()

    const readMoreLinks = screen.getAllByRole('link', { name: 'Read more' })
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders all author names', () => {
    render(<News />)

    expect(screen.getByText('by James Watson')).toBeInTheDocument()
    expect(screen.getByText('by Carl Anderson')).toBeInTheDocument()
    expect(screen.getByText('by Michelle Allison')).toBeInTheDocument()
  })

  it('has the correct section landmark', () => {
    render(<News />)

    expect(screen.getByRole('region', { name: 'News' })).toBeInTheDocument()
  })
})
