import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_IMAGE } from '../data'

describe('About', () => {
  it('renders the split layout with copy, video button and photo', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'Hey there!' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Watch the video/ })).toBeInTheDocument()

    const img = container.querySelector('img') as HTMLImageElement
    expect(img).not.toBeNull()
    expect(img.src).toContain(ABOUT_IMAGE)
  })
})
