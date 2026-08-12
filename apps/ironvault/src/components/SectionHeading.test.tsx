import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the title with the purple underline bar', () => {
    render(<SectionHeading title="about me" />)

    const heading = screen.getByRole('heading', { level: 2, name: 'about me' })
    expect(heading).toBeInTheDocument()
    expect(screen.getByTestId('section-heading-bar')).toHaveClass('bg-underline')
  })

  it('centers the title when the center prop is set', () => {
    render(<SectionHeading title="Some Latest Gym With me" center />)

    const wrapper = screen.getByTestId('section-heading')
    expect(wrapper).toHaveClass('text-center')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Some Latest Gym With me' }),
    ).toBeInTheDocument()
  })
})
