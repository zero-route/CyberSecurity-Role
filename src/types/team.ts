/**
 * Core type definitions for the Cyber Security Roles & Spectrum project.
 */

export type TeamId =
  | "white"
  | "red"
  | "blue"
  | "purple"
  | "yellow"
  | "green"
  | "orange";

export interface CareerRole {
  /** Unique slug, used for search/filter keys */
  id: string;
  /** Job title, e.g. "Penetration Tester" */
  title: string;
  /** One or two sentence summary of what the role does */
  description: string;
  /** Core technical/soft skills associated with the role */
  skills: string[];
  /** Recognized industry certifications relevant to the role */
  certifications: string[];
  /** Short keyword tags used for search & badges */
  tags: string[];
}

export interface CyberTeam {
  id: TeamId;
  /** Display name, e.g. "Red Team" */
  name: string;
  /** Short tagline shown under the team name */
  tagline: string;
  /** Longer paragraph explaining the team's mission */
  mission: string;
  /** Lucide icon name, resolved in the UI layer */
  icon: string;
  /** Tailwind color token root, e.g. "red", "blue" (500/400 shades derived in UI) */
  color: string;
  /** Hex value used for inline accents (glows, chart strokes, etc.) */
  hex: string;
  /** List of career roles belonging to this team */
  roles: CareerRole[];
}
