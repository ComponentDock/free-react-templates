import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partner } from './Partner'

describe('Partner', () => {
  it('renders the section heading', () => {
    render(<Partner />)
    expect(screen.getByRole('heading', { name: /Our Partners/i })).toBeInTheDocument()
  })

  it('displays all five partner images', () => {
    render(<Partner />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('has partner alt text', () => {
    render(<Partner />)
    expect(screen.getByAltText('Partner 1')).toBeInTheDocument()
    expect(screen.getByAltText('Partner 5')).toBeInTheDocument()
  })
})
