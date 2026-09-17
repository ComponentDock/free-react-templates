import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Expertise } from './Expertise'

describe('Expertise', () => {
  it('renders the section number and title', () => {
    render(<Expertise />)
    expect(screen.getByText('06')).toBeInTheDocument()
    expect(screen.getByText('Expertise')).toBeInTheDocument()
  })

  it('renders skill names and percentages', () => {
    render(<Expertise />)
    const skills = [
      { name: 'HTML', percent: '81%' },
      { name: 'CSS', percent: '93%' },
      { name: 'PSD', percent: '72%' },
      { name: 'Design', percent: '99%' },
    ]
    for (const skill of skills) {
      expect(screen.getByText(skill.name)).toBeInTheDocument()
      expect(screen.getByText(skill.percent)).toBeInTheDocument()
    }
  })
})
