import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the white title and all six service items', () => {
    const { container } = render(<Services />)
    expect(screen.getByText('The only ones')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Services' })).toBeInTheDocument()
    for (const title of [
      'Free Domains',
      'Shared Hosting',
      'Reseller Hosting',
      'VPS Hosting',
      'Dedicated Hosting',
      'Cloud Hosting',
    ]) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
    /* Six items + the six service icons. */
    expect(container.querySelectorAll('svg')).toHaveLength(6)
    expect(container.querySelectorAll('li')).toHaveLength(6)
  })

  it('renders the central circular graphic', () => {
    const { container } = render(<Services />)
    const circle = container.querySelector('img[alt="Hosting services at a glance"]')
    expect(circle).toBeInTheDocument()
    expect(circle?.className).toContain('rounded-full')
  })

  it('splits the offerings three per column', () => {
    const { container } = render(<Services />)
    const lists = container.querySelectorAll('ul')
    expect(lists).toHaveLength(2)
    for (const list of lists) {
      expect(within(list).getAllByRole('listitem')).toHaveLength(3)
    }
  })
})
