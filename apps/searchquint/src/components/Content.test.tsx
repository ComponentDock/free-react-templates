import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Content } from './Content'

describe('Content', () => {
  it('renders instructional text', () => {
    render(<Content />)
    expect(screen.getByText(/please click the search icon/i)).toBeInTheDocument()
  })

  it('renders a search icon in the text', () => {
    render(<Content />)
    const paragraph = screen.getByText(/please click the search icon/i)
    expect(paragraph).toBeInTheDocument()
  })
})
