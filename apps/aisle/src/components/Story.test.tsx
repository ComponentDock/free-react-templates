import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BandHeading } from './BandHeading'
import { Story } from './Story'
import { SECTION_IDS, STORY_BODY, STORY_TITLE } from '../lib/site'

describe('BandHeading', () => {
  it('sets the script title in the ink tone with the rose ornament under it', () => {
    const { container } = render(<BandHeading title="Counting Down" />)

    expect(screen.getByRole('heading', { level: 2, name: 'Counting Down' })).toHaveClass('text-ink')

    const ornament = container.querySelector('[aria-hidden="true"]') as HTMLElement

    expect(ornament).toHaveClass('h-[20px]', 'w-[160px]', 'relative')
    expect(ornament.querySelectorAll('span')).toHaveLength(2)
    expect(ornament.querySelector('svg')?.getAttribute('class')).toContain('text-brand')
  })

  it('hands the title and the star to the white tone on a photograph band', () => {
    const { container } = render(<BandHeading title="Ceremony" light />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('text-white')
  })
})

describe('Story', () => {
  it('draws its own ring pattern behind the title and one narrow paragraph', () => {
    const { container } = render(<Story />)

    const band = container.querySelector(`section#${SECTION_IDS.story}`) as HTMLElement

    expect(band).toHaveClass('pt-[50px]', 'pb-[20px]', 'md:pt-[100px]', 'md:pb-[70px]')
    expect(band).toHaveClass('isolate', 'relative')

    const pattern = band.querySelector('[aria-hidden="true"]') as HTMLElement

    expect(pattern).toHaveClass('ring-pattern', 'z-[-1]', 'opacity-80')
    expect(screen.getByRole('heading', { level: 2, name: STORY_TITLE })).toBeInTheDocument()
    expect(screen.getByText(STORY_BODY)).toHaveClass('text-copy')
    expect(screen.getByText(STORY_BODY).parentElement).toHaveClass('max-w-[570px]', 'text-center')
  })
})
