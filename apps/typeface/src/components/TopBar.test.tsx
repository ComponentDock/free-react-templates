import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { topBarSearchPlaceholder } from '../data'

describe('TopBar', () => {
  it('renders the social icons on the left with labels', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders a labeled search form with the reference placeholder', () => {
    render(<TopBar />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(topBarSearchPlaceholder)).toHaveAttribute(
      'aria-label',
      'Search the site',
    )
  })
})
