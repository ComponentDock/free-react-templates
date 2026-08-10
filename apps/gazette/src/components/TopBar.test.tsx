import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { socialLabels, socialLinks } from '../data'

describe('TopBar', () => {
  it('renders a black utility bar with all social icons on the left', () => {
    const { container } = render(<TopBar />)
    const bar = container.firstElementChild!
    expect(bar).toHaveClass('bg-ink')
    for (const name of socialLinks) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('renders the dark search field with a search icon and placeholder', () => {
    render(<TopBar />)
    const input = screen.getByRole('searchbox')
    expect(input).toHaveAttribute('placeholder', 'Type keyword to search...')
    expect(input).toHaveClass('bg-search')
    expect(screen.getByRole('button', { name: 'Submit search' })).toBeInTheDocument()
  })

  it('updates the query as the user types', () => {
    render(<TopBar />)
    const input = screen.getByRole('searchbox')
    fireEvent.change(input, { target: { value: 'travel' } })
    expect(input).toHaveValue('travel')
  })

  it('submits the search form without reloading', () => {
    render(<TopBar />)
    fireEvent.submit(screen.getByRole('search'))
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
