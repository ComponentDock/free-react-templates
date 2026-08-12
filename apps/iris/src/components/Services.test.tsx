import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SERVICES_TITLE } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders the centered title and eight alternating image/text cells', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')!
    expect(section).toHaveAttribute('id', 'services')
    expect(screen.getByRole('heading', { level: 2, name: SERVICES_TITLE })).toBeInTheDocument()
    const grid = section.querySelector('.grid') as HTMLElement
    const cells = Array.from(grid.children)
    expect(cells).toHaveLength(8)
    // DOM order: image, text, image, text, text, image, text, image
    const kinds = cells.map((cell) => (cell.tagName.toLowerCase() === 'img' ? 'img' : 'text'))
    expect(kinds).toEqual(['img', 'text', 'img', 'text', 'text', 'img', 'text', 'img'])
    expect(section.querySelectorAll('img')).toHaveLength(4)
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(4)
  })
})
