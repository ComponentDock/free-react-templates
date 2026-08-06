import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Works } from './Works'

describe('Works', () => {
  it('renders the heading and three project cards', () => {
    render(<Works />)

    expect(screen.getByRole('heading', { level: 2, name: /Recent Works/i })).toBeInTheDocument()

    for (const title of ['Illustration', 'Application', 'Web Design']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
