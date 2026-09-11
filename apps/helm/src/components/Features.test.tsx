import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section label and heading', () => {
    render(<Features />)

    expect(screen.getByText('Our Features')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /The technology for the future generation/,
      }),
    ).toBeInTheDocument()
  })

  it('renders two split feature rows with numbered captions', () => {
    render(<Features />)

    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('renders the feature titles', () => {
    render(<Features />)

    const titles = screen.getAllByText('Featured title name here')
    expect(titles.length).toBe(2)
  })
})
