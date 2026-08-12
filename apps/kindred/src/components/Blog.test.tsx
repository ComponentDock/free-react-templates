import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading, four entries and meta rows', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Advocating on behalf of abused and neglected' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Gathering Books for Children' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Access to Clean Water' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Super typhoon Haiyan Disaster Relief' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Sept. 04, 2019').length).toBe(4)
    expect(screen.getAllByText('Admin').length).toBe(4)
    expect(screen.getAllByText('3 Comments').length).toBe(4)
  })
})
