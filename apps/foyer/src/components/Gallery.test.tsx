import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading and gallery images with captions', () => {
    render(<Gallery />)
    expect(
      screen.getByRole('heading', { name: /Our Recent Works may impress you/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })

  it('renders a caption and More Details link for each project', () => {
    render(<Gallery />)
    expect(screen.getByText(/Lavendar ambient interior/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /More Details/i }).length).toBeGreaterThanOrEqual(3)
  })
})
