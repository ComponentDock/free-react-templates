import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders 5 partner logos', () => {
    render(<Partners />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })

  it('has correct alt text for partners', () => {
    render(<Partners />)
    expect(screen.getByAltText('Partner 1')).toBeInTheDocument()
    expect(screen.getByAltText('Partner 5')).toBeInTheDocument()
  })

  it('links each partner', () => {
    render(<Partners />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(5)
  })
})
