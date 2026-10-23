import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectScreen } from './ProjectScreen'

describe('ProjectScreen', () => {
  it('renders the dashboard preview image overlapping the hero', () => {
    render(<ProjectScreen />)

    const image = screen.getByRole('img', { name: 'Knotly app dashboard preview' })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/knotly-screen/1200/750')
  })
})
