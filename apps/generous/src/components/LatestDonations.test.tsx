import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestDonations } from './LatestDonations'

describe('LatestDonations', () => {
  it('shows the heading and four person cards with names and amounts', () => {
    const { container } = render(<LatestDonations />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Donations' })).toBeInTheDocument()
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText('Christine Charles')).toBeInTheDocument()
    expect(screen.getByText('Albert Sluyter')).toBeInTheDocument()
    expect(screen.getByText('Andrew Holloway')).toBeInTheDocument()
    expect(screen.getByText('$1,150')).toBeInTheDocument()
    expect(screen.getByText('$150')).toBeInTheDocument()
    expect(screen.getByText('$534')).toBeInTheDocument()
    expect(screen.getByText('$2,500')).toBeInTheDocument()
    expect(screen.getAllByText('Donated 3 hours ago')).toHaveLength(4)
    expect(screen.getAllByText('Donated')).toHaveLength(4)
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })

  it('sits on the light background with circular avatars', () => {
    const { container } = render(<LatestDonations />)
    expect(container.querySelector('section')).toHaveClass('bg-light')
    const avatars = container.querySelectorAll('img')
    for (const avatar of avatars) {
      expect(avatar).toHaveClass('rounded-full')
    }
  })
})
