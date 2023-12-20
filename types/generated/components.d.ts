import type { Schema, Attribute } from '@strapi/strapi';

export interface TechnologyTechnologies extends Schema.Component {
  collectionName: 'components_technology_technologies';
  info: {
    displayName: 'technologies';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    technology: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'technology.technologies': TechnologyTechnologies;
    }
  }
}
