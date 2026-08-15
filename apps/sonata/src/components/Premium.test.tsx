import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Premium } from './Premium'

describe('Premium', () => {
  it('renders the heading and four circular-image features', () => {
    const { container } = render(<Premium />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Why go Premium/)

    for (const title of [
      'No ad interruptions',
      'High Quality',
      'Listen Offline',
      'Download Music',
    ]) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
    }

    expect(container.querySelectorAll('.rounded-full')).toHaveLength(4)
  })

  it('renders a short muted caption under each feature', () => {
    render(<Premium />)

    expect(screen.getByText('Consectetur adipiscing elit')).toBeInTheDocument()
    expect(screen.getByText('Ectetur adipiscing elit')).toBeInTheDocument()
    expect(screen.getByText('Sed do eiusmod tempor')).toBeInTheDocument()
    expect(screen.getByText('Adipiscing elit')).toBeInTheDocument()
  })
})
