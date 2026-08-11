import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { aboutName, aboutParagraph, aboutSectionLabel, signature, watchVideoLabel } from '../data'

describe('About', () => {
  it('renders a dark about section with heading, paragraph, video link, and signature', () => {
    const { container } = render(<About />)
    const section = screen.getByRole('region', { name: aboutSectionLabel })
    expect(section).toBeInTheDocument()
    expect(section.className).toMatch(/dark/i)
    expect(screen.getByRole('heading', { level: 1, name: aboutName })).toBeInTheDocument()
    expect(screen.getByText(aboutParagraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: watchVideoLabel })).toBeInTheDocument()
    expect(screen.getByText(signature)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })
})
