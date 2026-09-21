import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Updates } from './Updates'

describe('Updates', () => {
  it('renders the section heading', () => {
    render(<Updates />)

    expect(screen.getByRole('heading', { name: /Our food update/ })).toBeInTheDocument()
  })

  it('displays all three blog posts with titles and dates', () => {
    render(<Updates />)

    expect(screen.getByText(/No finer food can be found/)).toBeInTheDocument()
    expect(screen.getByText(/Things go better with food/)).toBeInTheDocument()
    expect(screen.getByText(/Food head above the rest/)).toBeInTheDocument()
    expect(screen.getByText('18 Sep 2025')).toBeInTheDocument()
    expect(screen.getByText('20 Sep 2025')).toBeInTheDocument()
    expect(screen.getByText('22 Sep 2025')).toBeInTheDocument()
  })

  it('shows read more links', () => {
    render(<Updates />)

    const links = screen.getAllByText(/read more/i)
    expect(links.length).toBe(3)
  })

  it('shows Admin author info', () => {
    render(<Updates />)

    const admins = screen.getAllByText('Admin')
    expect(admins.length).toBe(3)
  })
})
