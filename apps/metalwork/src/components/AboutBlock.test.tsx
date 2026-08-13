import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutBlock } from './AboutBlock'
import { aboutBlocks } from '../data'

describe('AboutBlock', () => {
  it('renders the heading, paragraph, Read More link, and photo', () => {
    const { container } = render(<AboutBlock {...aboutBlocks[0]!} />)

    expect(screen.getByRole('heading', { name: aboutBlocks[0]!.title })).toBeInTheDocument()
    expect(screen.getByText(aboutBlocks[0]!.text)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Read More/ })).toHaveAttribute('href', '#about')
    expect(container.querySelector('img')).toHaveAttribute('src', aboutBlocks[0]!.image)
  })

  it('applies the light surface tone and reversed order when configured', () => {
    const { container } = render(<AboutBlock {...aboutBlocks[1]!} reversed tone="surface" />)

    expect(screen.getByRole('heading', { name: aboutBlocks[1]!.title })).toBeInTheDocument()
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-surface')
  })
})
