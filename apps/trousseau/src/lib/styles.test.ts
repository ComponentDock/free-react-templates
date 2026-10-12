import {
  containerClass,
  cornerClass,
  dropdownPanelClass,
  mainButtonClass,
  navLinkClass,
  pageClass,
  skipLinkClass,
} from './styles'

function tokens(value: string): string[] {
  return value.split(' ')
}

describe('the page styles', () => {
  it('keeps the page on white and clips the band that bleeds wider than the container', () => {
    expect(tokens(pageClass)).toContain('bg-white')
    expect(tokens(pageClass)).toContain('overflow-x-hidden')
  })

  it('hides the skip link until it is focused', () => {
    expect(tokens(skipLinkClass)).toContain('sr-only')
    expect(tokens(skipLinkClass)).toContain('focus:not-sr-only')
  })

  it('builds the container on the four tiers the design was drawn against', () => {
    const width = tokens(containerClass)

    expect(width).toContain('sm:max-w-[540px]')
    expect(width).toContain('md:max-w-[720px]')
    expect(width).toContain('lg:max-w-[960px]')
    expect(width).toContain('xl:max-w-[1140px]')
  })

  it('keeps every button square, uppercase and pink', () => {
    const button = tokens(mainButtonClass)

    expect(button).toContain('rounded-none')
    expect(button).toContain('border-primary-600')
    expect(button).toContain('uppercase')
    expect(button).not.toContain('rounded-lg')
  })

  it('marks the band the page stands on in the brand and the rest on the ink', () => {
    expect(tokens(navLinkClass(true))).toContain('text-brand')

    const resting = tokens(navLinkClass(false))

    expect(resting).toContain('text-ink')
    expect(resting).not.toContain('text-brand')
  })

  it('keeps the dropdown panel hidden until its row is open', () => {
    expect(tokens(dropdownPanelClass(false))).toContain('invisible')
    expect(tokens(dropdownPanelClass(true))).toContain('visible')
  })

  it('turns a card flourish into the corner it is handed', () => {
    expect(tokens(cornerClass('left'))).toContain('-left-[22px]')
    expect(tokens(cornerClass('right'))).toContain('-right-[22px]')
  })
})
