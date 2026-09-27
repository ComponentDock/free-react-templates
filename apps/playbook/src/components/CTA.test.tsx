import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders default text', () => {
    render(<CTA />)
    expect(screen.getByText('Start a Project.')).toBeInTheDocument()
  })

  it('changes text on hover', async () => {
    const user = userEvent.setup()
    render(<CTA />)

    const section = screen.getByText('Start a Project.').closest('section')!
    await user.hover(section)

    expect(screen.getByText("Let's chat we are good people.")).toBeInTheDocument()
  })

  it('reverts text on mouse leave', async () => {
    const user = userEvent.setup()
    render(<CTA />)

    const section = screen.getByText('Start a Project.').closest('section')!
    await user.hover(section)
    await user.unhover(section)

    expect(screen.getByText('Start a Project.')).toBeInTheDocument()
  })
})
