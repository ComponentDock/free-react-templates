/** The six weather shapes drawn inline; one shared component paints them all. */
export type IconKey = 'sun' | 'partly' | 'cloud' | 'rain' | 'thunder' | 'snow'

export interface Detail {
  readonly label: string
  readonly value: string
}

export interface Hour {
  readonly time: string
  readonly icon: IconKey
  readonly iconLabel: string
  readonly temp: number
}

export interface Now {
  readonly city: string
  readonly when: string
  readonly icon: IconKey
  readonly iconLabel: string
  readonly temp: number
  readonly condition: string
  readonly details: readonly Detail[]
  readonly hours: readonly Hour[]
}

export interface Day {
  readonly label: string
  readonly icon: IconKey
  readonly iconLabel: string
  readonly lo: number
  readonly hi: number
}

export interface Night {
  readonly city: string
  readonly when: string
  readonly icon: IconKey
  readonly iconLabel: string
  readonly temp: number
  readonly condition: string
  readonly note: string
}

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/**
 * Every range bar is a share of one fixed window, so the five days are directly
 * comparable: 12 °C at the left edge, 28 °C at the right.
 */
export const RANGE = { min: 12, span: 16 } as const

export const NOW: Now = {
  city: 'Porto',
  when: 'Friday, 25 September · 14:20',
  icon: 'partly',
  iconLabel: 'Partly cloudy',
  temp: 23,
  condition: 'Partly cloudy · H 25° L 16°',
  details: [
    { label: 'Feels like', value: '24°' },
    { label: 'Wind', value: '14 km/h NW' },
    { label: 'Humidity', value: '58%' },
    { label: 'UV index', value: '6 High' },
  ],
  hours: [
    { time: '15:00', icon: 'sun', iconLabel: 'Sunny', temp: 24 },
    { time: '16:00', icon: 'sun', iconLabel: 'Sunny', temp: 25 },
    { time: '17:00', icon: 'partly', iconLabel: 'Partly cloudy', temp: 23 },
    { time: '18:00', icon: 'cloud', iconLabel: 'Cloudy', temp: 21 },
    { time: '19:00', icon: 'rain', iconLabel: 'Light rain', temp: 19 },
  ],
}

export const DAYS: readonly Day[] = [
  { label: 'Today', icon: 'partly', iconLabel: 'Partly cloudy', lo: 16, hi: 25 },
  { label: 'Sat', icon: 'rain', iconLabel: 'Rain, 80 percent chance', lo: 15, hi: 21 },
  { label: 'Sun', icon: 'thunder', iconLabel: 'Thunderstorms', lo: 14, hi: 19 },
  { label: 'Mon', icon: 'cloud', iconLabel: 'Cloudy', lo: 15, hi: 22 },
  { label: 'Tue', icon: 'sun', iconLabel: 'Sunny', lo: 17, hi: 27 },
]

export const NIGHT: Night = {
  city: 'Reykjavík',
  when: '13:20 local',
  icon: 'snow',
  iconLabel: 'Light snow',
  temp: -2,
  condition: 'Light snow · H 1° L −4°',
  note: 'Icy roads warning until 18:00',
}
