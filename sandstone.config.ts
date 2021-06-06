import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'tsdp',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 6,
  namespace: 'default',
  packUid: 'rz8eOHGL',
  saveOptions: { path: 'build/' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
