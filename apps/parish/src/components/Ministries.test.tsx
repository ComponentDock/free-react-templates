import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Ministries, getMinistryIcon } from './Ministries'

describe('Ministries', () => {
  it('renders six ministry rows with icons and the side photo', () => {
    const { container } = render(<Ministries />)
    for (const title of [
      'Daily Prayers',
      'Church Community',
      'Teaching',
      'Helpers',
      'Wedding',
      'Events',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img').length).toBe(1)
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/id/1082/700/900',
    )
    expect(screen.getByRole('heading', { name: 'Daily Prayers' })).toBeInTheDocument()
  })

  it('falls back to the church icon for unknown ministry icons', () => {
    expect(getMinistryIcon('unknown-name')).toBeDefined()
    expect(getMinistryIcon('church')).toBeDefined()
  })
})
