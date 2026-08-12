import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Teachers } from './Teachers'
import { TEACHERS } from '../data'

describe('Teachers', () => {
  it('renders the heading and four staff cards with names and positions', () => {
    render(<Teachers />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Certified Teachers' }),
    ).toBeInTheDocument()
    for (const teacher of TEACHERS) {
      expect(screen.getByRole('heading', { level: 3, name: teacher.name })).toBeInTheDocument()
      expect(screen.getByText(teacher.position)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: teacher.name })).toBeInTheDocument()
    }
  })

  it('renders three social buttons per staff card', () => {
    render(<Teachers />)
    const socialButtons = screen.getAllByRole('link', { name: /on social media$/ })
    expect(socialButtons).toHaveLength(TEACHERS.length * 3)
  })
})
