import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('My Works')).toBeInTheDocument()
  })

  it('renders all four gallery items', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByAltText('Web Design')).toBeInTheDocument()
    expect(screen.getByAltText('Mobile App')).toBeInTheDocument()
    expect(screen.getByAltText('UI Kit')).toBeInTheDocument()
  })

  it('shows category label on hover and hides on leave', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const card = screen.getByAltText('Brand Identity').closest('.group')!
    await user.hover(card)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    await user.unhover(card)
  })

  it('renders the More Work button', () => {
    render(<Gallery />)
    expect(screen.getByRole('link', { name: 'More Work' })).toBeInTheDocument()
  })
})
