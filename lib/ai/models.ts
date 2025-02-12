// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "demo-model",
    label: "Demo Model",
    apiIdentifier: "demo-model",
    description: "Model that contains all information about demo.",
  },
] as const;

export const DEFAULT_MODEL_NAME: string = "demo-model";
