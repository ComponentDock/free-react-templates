import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientLogos } from './ClientLogos'

describe('ClientLogos', () => {
  it('renders all five partner logos', () => {
    render(<ClientLogos />)

    for (const name of ['EduLearn', 'SkillUp', 'LearnHub', 'CoursePro', 'StudyMax']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders five logo placeholders', () => {
    render(<ClientLogos />)

    const logos = ['EduLearn', 'SkillUp', 'LearnHub', 'CoursePro', 'StudyMax']
    logos.forEach((name) => {
      expect(screen.getByText(name).closest('div')).toBeInTheDocument()
    })
  })
})
