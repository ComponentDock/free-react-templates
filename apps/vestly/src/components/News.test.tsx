import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section subtitle and heading', () => {
    render(<News />)
    expect(screen.getByText('take a look at our')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest News in Crypto')
  })

  it('renders all three news articles', () => {
    render(<News />)
    expect(screen.getByText('New Regulations on the Crypto Market')).toBeInTheDocument()
    expect(screen.getByText('Good News from the Crypto World')).toBeInTheDocument()
    expect(screen.getByText('Bitcoin price goes to the Moon with new laws')).toBeInTheDocument()
  })

  it('renders news images with correct seeds', () => {
    render(<News />)
    const images = screen.getAllByRole('img')
    const newsImages = images.filter((img) => (img as HTMLImageElement).src.includes('vestly-news'))
    expect(newsImages).toHaveLength(3)
  })

  it('renders read more links for each article', () => {
    render(<News />)
    const links = screen.getAllByText('read more')
    expect(links).toHaveLength(3)
  })
})
