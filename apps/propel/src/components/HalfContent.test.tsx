import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HalfContent } from './HalfContent'
import { PANELS } from '../data'

describe('HalfContent', () => {
  it('renders both panels with headings, checks, images and buttons', () => {
    render(<HalfContent />)
    for (const panel of PANELS) {
      expect(screen.getByRole('heading', { level: 2, name: panel.heading })).toBeInTheDocument()
      expect(screen.getByText(panel.body)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: panel.imageAlt })).toHaveAttribute('src', panel.image)
      for (const check of panel.checks) {
        expect(screen.getByText(check)).toBeInTheDocument()
      }
    }

    const buttons = screen.getAllByRole('link', { name: 'Learn more' })
    expect(buttons).toHaveLength(2)
    for (const button of buttons) {
      expect(button).toHaveAttribute('href', '#contact')
    }
  })

  it('ships two distinct check lists', () => {
    const allChecks = PANELS.flatMap((panel) => panel.checks)
    expect(new Set(allChecks).size).toBe(allChecks.length)
  })
})
