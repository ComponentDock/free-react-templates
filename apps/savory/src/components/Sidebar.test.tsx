import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('shows an ad widget with a placeholder image', () => {
    render(<Sidebar />)

    expect(screen.getByText('Advertisement')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /advertisement/i })).toBeInTheDocument()
  })

  it('shows a Recent Posts widget with five rows of thumbnail + title + meta', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(screen.getByText('Chicken Salad')).toBeInTheDocument()
    expect(screen.getByText('Steak with boiled vegetables')).toBeInTheDocument()
    expect(screen.getByText('July 11, 2018')).toBeInTheDocument()
  })
})
