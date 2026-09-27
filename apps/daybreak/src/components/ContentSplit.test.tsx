import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentSplit } from './ContentSplit'

describe('ContentSplit', () => {
  it('renders The Story heading', () => {
    render(<ContentSplit />)
    expect(screen.getByRole('heading', { level: 2, name: 'The Story' })).toBeInTheDocument()
  })

  it('renders Dreamers heading', () => {
    render(<ContentSplit />)
    expect(screen.getByRole('heading', { level: 2, name: 'Dreamers' })).toBeInTheDocument()
  })

  it('renders body paragraphs', () => {
    render(<ContentSplit />)
    expect(screen.getByText(/warning label this big/)).toBeInTheDocument()
    expect(screen.getByText(/probably haven't heard of them/)).toBeInTheDocument()
  })

  it('renders the More… CTA button', () => {
    render(<ContentSplit />)
    const link = screen.getByRole('link', { name: 'More…' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#portfolio')
  })
})
