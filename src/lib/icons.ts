export const icon = {
  player: (): string => {
    return 'img:icons/space/player-ship.svg';
  },
  star: (): string => {
    return 'img:icons/space/star-sattelites.svg';
  },

  stars: (): string => {
    return 'img:icons/space/stars.svg';
  },

  planet: (type: string): string => {
    return `img:icons/planets/${type.toLowerCase()}.svg`;
  },

  settlement: (): string => {
    return 'img:icons/space/settlement.svg';
  },

  starship: (): string => {
    return 'img:icons/space/spaceship.svg';
  },

  derelict: (): string => {
    return 'img:icons/space/derelict.svg';
  },

  vault: (): string => {
    return 'img:icons/space/vault.svg';
  },

  creature: (form: string): string => {
    return /(amoeba|amorphous|avian|beast|crustacean|fish|humanoid|insectoid|jellyfish|lizard|octopoid|plant|ray|snake|spider|starfish|worm)/i.test(
      form
    )
      ? `img:icons/life/${form.split(' ')[0].toLowerCase()}.svg`
      : 'img:icons/life/floating-tentacles.svg';
  },

  npc: (): string => {
    return 'img:icons/life/character.svg';
  },

  asset: (name: string): string => {
    const baseUrl =
      'https://raw.githubusercontent.com/aureyia/roll20-character-sheets/starforged-ui-components/Ironsworn-Starforged/src/app/img/icons/';
    return `img:${baseUrl}asset-${name.toLowerCase().replace(' ', '-')}.svg`;
  },
};
