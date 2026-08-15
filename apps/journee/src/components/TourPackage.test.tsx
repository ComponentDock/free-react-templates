import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  joinNowLabel,
  packageNextLabel,
  packageParagraph,
  packagePreviousLabel,
  packageSlides,
  packageTitle,
  starLabel,
} from '../data'
import { TourPackage } from './TourPackage'

describe('TourPackage', () => {
  it('renders a destination card with stars, join-now link, and side blurb', () => {
    render(<TourPackage />)
    expect(screen.getByRole('heading', { name: packageSlides[0]!.title })).toBeInTheDocument()
    expect(screen.getAllByText(packageParagraph).length).toBeGreaterThanOrEqual(1)
    for (let i = 0; i < 5; i += 1) {
      expect(screen.getByLabelText(starLabel(i))).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: joinNowLabel })).toHaveLength(2)
    expect(screen.getByRole('heading', { name: packageTitle })).toBeInTheDocument()
  })

  it('navigates between the four slides with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<TourPackage />)

    const next = screen.getByRole('button', { name: packageNextLabel })
    await user.click(next)
    expect(screen.getByRole('heading', { name: packageSlides[1]!.title })).toBeInTheDocument()

    const previous = screen.getByRole('button', { name: packagePreviousLabel })
    await user.click(previous)
    expect(screen.getByRole('heading', { name: packageSlides[0]!.title })).toBeInTheDocument()

    // Wrap-around
    await user.click(previous)
    expect(screen.getByRole('heading', { name: packageSlides[3]!.title })).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByRole('heading', { name: packageSlides[0]!.title })).toBeInTheDocument()
  })
})
