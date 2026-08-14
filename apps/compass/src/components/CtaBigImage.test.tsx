import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CtaBigImage } from './CtaBigImage'
import { ctaSlides, ctaPanel } from '../data'

const slides = () => screen.getByTestId('cta').querySelectorAll('div[aria-hidden]')

describe('CtaBigImage', () => {
  it('renders the three-photo carousel with the first slide active', () => {
    render(<CtaBigImage />)
    const all = slides()
    expect(all).toHaveLength(3)
    expect(all[0]!).toHaveAttribute('aria-hidden', 'false')
    expect(all[1]!).toHaveAttribute('aria-hidden', 'true')
    expect(all[2]!).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the pink caption panel with eyebrow, headline and indigo Read More button', () => {
    render(<CtaBigImage />)
    expect(screen.getByText(ctaPanel.eyebrow)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Create Your Own Web Masterpiece' }),
    ).toBeInTheDocument()
    const readMore = screen.getByRole('link', { name: 'Read More' })
    expect(readMore).toHaveAttribute('href', '#services')
    expect(readMore).toHaveClass('bg-royal', 'rounded-full')
  })

  it('advances the carousel with the Next arrow and wraps around', async () => {
    const user = userEvent.setup()
    render(<CtaBigImage />)
    const next = screen.getByRole('button', { name: 'Next slide' })

    await user.click(next)
    expect(slides()[1]!).toHaveAttribute('aria-hidden', 'false')
    await user.click(next)
    expect(slides()[2]!).toHaveAttribute('aria-hidden', 'false')
    await user.click(next)
    expect(slides()[0]!).toHaveAttribute('aria-hidden', 'false')
  })

  it('wraps backwards with the Previous arrow from the first slide', async () => {
    const user = userEvent.setup()
    render(<CtaBigImage />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(slides()[ctaSlides.length - 1]!).toHaveAttribute('aria-hidden', 'false')
  })
})
