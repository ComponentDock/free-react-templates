import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SkillBar } from './SkillBar'

describe('SkillBar', () => {
  it('displays the skill label', () => {
    render(<SkillBar label="Wireframing" percentage={90} />)
    expect(screen.getByText('Wireframing')).toBeInTheDocument()
  })

  it('displays the percentage label', () => {
    render(<SkillBar label="Wireframing" percentage={90} />)
    expect(screen.getByText('90%')).toBeInTheDocument()
  })

  it('renders a progressbar with correct aria attributes', () => {
    render(<SkillBar label="UI/UX" percentage={70} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '70')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '100')
  })

  it('sets the width style based on percentage', () => {
    render(<SkillBar label="Interaction design" percentage={45} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveStyle({ width: '45%' })
  })
})
