import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Highlights } from './Highlights'

describe('Highlights', () => {
  it('renders the three highlight tiles with icons and blurbs', () => {
    render(<Highlights />)

    for (const title of ['Easy to Use', 'Awesome Design', 'Easy to Customize']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByText(/consectet adop adipisicing elit/)).toHaveLength(3)
  })
})
