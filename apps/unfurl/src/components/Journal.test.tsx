import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Journal from './Journal'

describe('Journal', () => {
  it('renders the journal heading', () => {
    render(<Journal />)
    expect(screen.getByText('My Journal')).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<Journal />)

    const titles = screen.getAllByText('A Mountaineering Guide For Beginners')
    expect(titles.length).toBe(3)
  })

  it('renders author and read time for each post', () => {
    render(<Journal />)

    const authors = screen.getAllByText('By Joefrey')
    expect(authors.length).toBe(3)

    const readTimes = screen.getAllByText('5 mins read')
    expect(readTimes.length).toBe(3)
  })

  it('renders blog post images', () => {
    render(<Journal />)

    const images = screen.getAllByRole('img', { hidden: true })
    expect(images.length).toBe(3)
  })
})
