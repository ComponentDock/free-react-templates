import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  classes,
  classesEyebrow,
  classesTitle,
  membershipDiscount,
  membershipDiscountLabel,
  membershipEyebrow,
  membershipTitle,
  signUpButtonLabel,
  signUpDescription,
  signUpEyebrow,
  signUpTitle,
} from '../data'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  it('renders the six class schedule rows with names and times', () => {
    const { container } = render(<UpcomingEvents />)
    // "Next" is the shared eyebrow of both the classes box and the membership card
    expect(screen.getAllByText(classesEyebrow)).toHaveLength(2)
    const classesBox = screen.getByRole('heading', { level: 3, name: classesTitle }).closest('div')!

    for (const entry of classes) {
      expect(within(classesBox).getAllByText(entry.name).length).toBeGreaterThan(0)
      expect(within(classesBox).getByText(entry.time)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(classes.length)
  })

  it('renders the membership card with the blue discount figure', () => {
    render(<UpcomingEvents />)
    expect(screen.getAllByText(membershipEyebrow).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { level: 3, name: membershipTitle })).toBeInTheDocument()
    expect(screen.getByText(membershipDiscount)).toBeInTheDocument()
    expect(screen.getByText(membershipDiscountLabel)).toBeInTheDocument()
  })

  it('renders the personal trainer sign-up box with its button', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText(signUpEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: signUpTitle })).toBeInTheDocument()
    expect(screen.getByText(signUpDescription)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: signUpButtonLabel })).toBeInTheDocument()
  })
})
