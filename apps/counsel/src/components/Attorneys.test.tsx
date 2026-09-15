import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attorneys } from './Attorneys'

describe('Attorneys', () => {
  it('renders the heading and four attorney cards', () => {
    render(<Attorneys />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Legal Attorneys' }),
    ).toBeInTheDocument()

    const names = ['Richard Anderson', 'Jefford Maxillin', 'Carlos Obing', 'Nathan Smith']
    for (const name of names) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('shows attorney photos from picsum.photos', () => {
    render(<Attorneys />)

    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('shows social media links for each attorney', () => {
    render(<Attorneys />)

    const websiteLinks = screen.getAllByRole('link', { name: /website/ })
    expect(websiteLinks).toHaveLength(4)
  })
})
