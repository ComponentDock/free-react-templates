import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the account and donate links with social icons', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: 'My Account' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Donate Now' })).toHaveAttribute('href', '#donate')
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute('href', '#')
  })
})
