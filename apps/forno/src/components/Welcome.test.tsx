import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('shows the restaurant photo, headings and welcome copy', () => {
    render(<Welcome />)

    expect(screen.getByRole('img', { name: 'Inside the Forno dining room' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Forno Restaurant' })).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()

    const paragraphs = screen.getAllByText(/Far far away|A small river named Duden/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)

    expect(screen.getByText('Mon - Fri 8 AM - 11 PM')).toBeInTheDocument()
    expect(screen.getByText('+ 1-978-123-4567')).toBeInTheDocument()
  })
})
