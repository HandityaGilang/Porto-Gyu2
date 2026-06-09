export type CommissionStatus = "open" | "closed";

export interface SiteSettings {
  commissionStatus: CommissionStatus;
}

// This local settings object can later be replaced with content from Sanity CMS
// or Supabase so commission availability becomes editable outside the codebase.
export const siteSettings: SiteSettings = {
  commissionStatus: "open",
};
