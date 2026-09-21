import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section title', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/what kind of coffee/i)
  })

  it('renders 5 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img', { name: /coffee gallery/i })
    expect(images).toHaveLength(5)
  })
})
