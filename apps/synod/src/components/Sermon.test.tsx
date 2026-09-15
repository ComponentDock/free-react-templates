import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sermon } from './Sermon'

describe('Sermon', () => {
  it('renders the sermon quote, speaker, date and category', () => {
    render(<Sermon />)

    expect(screen.getByText('Love the Lord Your God with All Your Heart')).toBeInTheDocument()
    expect(screen.getByText(/Pastor James Mitchell/)).toBeInTheDocument()
    expect(screen.getByText(/February 12, 2025/)).toBeInTheDocument()
    expect(screen.getByText('Faith')).toBeInTheDocument()
  })

  it('renders four media action buttons', () => {
    render(<Sermon />)

    expect(screen.getByRole('button', { name: 'Watch sermon' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Listen to sermon' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Photo gallery' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Related links' })).toBeInTheDocument()
  })

  it('renders the pastor avatar image', () => {
    const { container } = render(<Sermon />)

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('alt', 'Pastor James Mitchell')
  })
})
