import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'
import { gallery } from '../data'

describe('Gallery', () => {
  it('renders four staggered cafe photos', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    expect(images.map((img) => img.getAttribute('src'))).toEqual(gallery)
  })

  it('labels every photo with an alt description', () => {
    render(<Gallery />)
    expect(screen.getByRole('img', { name: /berries/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /ingredients/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /coffee beans/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Latte/ })).toBeInTheDocument()
  })
})
