import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Work } from './Work'

describe('Work', () => {
  it('renders the heading and six portfolio tiles', () => {
    render(<Work />)
    expect(screen.getByRole('heading', { name: /our work/i })).toBeInTheDocument()
    expect(screen.getAllByAltText(/hairstyle/i)).toHaveLength(6)
  })
})
