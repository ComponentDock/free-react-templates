import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { socialLabels, socialLinks, topBar } from '../data'

describe('TopBar', () => {
  it('renders the greeting and email on the left', () => {
    render(<TopBar />)
    expect(screen.getByText(topBar.greeting)).toBeInTheDocument()
    expect(screen.getByText(topBar.email)).toBeInTheDocument()
  })

  it('renders all social icons with accessible labels', () => {
    render(<TopBar />)
    for (const name of socialLinks) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('renders the search field and updates as the user types', () => {
    render(<TopBar />)
    const input = screen.getByRole('searchbox')
    expect(input).toHaveAttribute('placeholder', topBar.searchPlaceholder)
    fireEvent.change(input, { target: { value: 'winter' } })
    expect(input).toHaveValue('winter')
  })

  it('submits the search form without reloading', () => {
    render(<TopBar />)
    fireEvent.submit(screen.getByRole('search'))
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
