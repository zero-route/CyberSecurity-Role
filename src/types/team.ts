export type TeamId =
  | "white"
  | "red"
  | "blue"
  | "purple"
  | "yellow"
  | "green"
  | "orange";

export interface CareerRole {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
  certifications: string[];
  tags: string[];
}

export interface CyberTeam {
  id: TeamId;
  name: string;
  tagline: string;
  mission: string;
  icon: string;
  color: string;
  hex: string;
  roles: CareerRole[];
}