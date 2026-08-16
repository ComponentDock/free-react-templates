import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'
import { topBar } from '../data'

describe('TopBar', () => {
  it('shows the free call phone number on the left', () => {
    render(<TopBar />)
    expect(screen.getByText(topBar.phone)).toBeInTheDocument()
  })

  it('shows the email address with the source typo fixed', () => {
    render(<TopBar />)
    expect(screen.getByText(topBar.email)).toBeInTheDocument()
  })

  it('renders social icon links with accessible labels', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
