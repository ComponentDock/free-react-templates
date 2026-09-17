import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Screenshots } from './Screenshots'

describe('Screenshots', () => {
  it('renders the heading, subtitle, and four screenshot images', () => {
    render(<Screenshots />)

    expect(screen.getByRole('heading', { level: 2, name: 'Screenshots' })).toBeInTheDocument()
    expect(screen.getByText(/A look inside Appnova/)).toBeInTheDocument()

    const screenshots = screen.getAllByRole('img', { name: /Appnova screen/ })
    expect(screenshots).toHaveLength(4)
  })
})
