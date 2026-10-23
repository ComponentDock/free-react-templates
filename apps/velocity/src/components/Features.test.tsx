import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the two feature rows with headings and a Download Now button', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Features that give you real feel' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Easy setup and management' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: 'Features that give you real feel' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Easy setup and management' })).toBeInTheDocument()

    const buttons = screen.getAllByRole('link', { name: 'Download Now' })
    expect(buttons).toHaveLength(2)
    for (const button of buttons) {
      expect(button).toHaveAttribute('href', '#download')
    }
  })
})
