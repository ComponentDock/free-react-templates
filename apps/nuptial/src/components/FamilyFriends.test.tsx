import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FamilyFriends } from './FamilyFriends'

describe('FamilyFriends', () => {
  it('shows the heading and all eight wedding party members', () => {
    render(<FamilyFriends />)
    expect(screen.getByRole('heading', { name: 'Family & Friends' })).toBeInTheDocument()
    for (const name of [
      'Mark Tomy',
      'John Henceworth',
      'Rey Cooper',
      'Robert Chan',
      'Rose Jones',
      'Mary Dell',
      'Alicia Brean',
      'Angel Worth',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders groomsmen and bridesmaid roles with circular photos', () => {
    const { container } = render(<FamilyFriends />)
    expect(screen.getAllByText('Groomsmen')).toHaveLength(4)
    expect(screen.getAllByText('Bridesmaid')).toHaveLength(4)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(8)
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
