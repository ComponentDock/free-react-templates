import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders the pale section with a heading and six feature cards', () => {
    render(<Experience />)
    const section = screen.getByRole('region', { name: 'Experience' })
    expect(section).toHaveClass('bg-light-bg', 'border-t', 'border-border-soft')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experience Once In Your Life Time' }),
    ).toBeInTheDocument()
    const list = screen.getByRole('list')
    expect(list).toHaveClass('lg:grid-cols-3')
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toEqual([
      'Good Foods',
      'Travel Anywhere',
      'Airplane',
      'Beach Resort',
      'Mountain Climbing',
      'Hot Air Balloon',
    ])
    expect(list.querySelectorAll('svg')).toHaveLength(6)
  })
})
