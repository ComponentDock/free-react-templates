import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { watchRows } from '../data'
import { WatchChoice } from './WatchChoice'

describe('WatchChoice', () => {
  it('renders two alternating feature rows with heading, paragraph, and button', () => {
    const { container } = render(<WatchChoice />)

    expect(screen.getAllByRole('heading', { name: watchRows[0].title })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: watchRows[0].button })).toHaveLength(2)
    expect(container.querySelectorAll('img')).toHaveLength(2)
    expect(screen.getAllByText(watchRows[0].paragraph)).toHaveLength(2)
  })
})
