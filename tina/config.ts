import { defineConfig } from "tinacms";

const branch = process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "***",
  token: process.env.TINA_TOKEN || "***",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "md",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "role", label: "Role", required: true },
          { type: "string", name: "affiliation", label: "Affiliation", ui: { component: "textarea" } },
          { type: "string", name: "email1", label: "Email 1" },
          { type: "string", name: "email2", label: "Email 2" },
          { type: "string", name: "phone", label: "Phone" },
          { type: "string", name: "orcid", label: "ORCID" },
          { type: "string", name: "scholar", label: "Google Scholar" },
          { type: "image", name: "photo", label: "Profile Photo" },
          {
            type: "object", list: true, name: "news", label: "Recent News",
            fields: [{ type: "string", name: "item", label: "News Item" }]
          },
          {
            type: "object", list: true, name: "specialization", label: "Area of Specialization",
            fields: [{ type: "string", name: "item", label: "Item" }]
          },
          {
            type: "object", list: true, name: "education", label: "Academic Education",
            fields: [{ type: "string", name: "item", label: "Item" }]
          },
          {
            type: "object", list: true, name: "experience", label: "Experience",
            fields: [{ type: "string", name: "item", label: "Item" }]
          },
          {
            type: "object", list: true, name: "adminExperience", label: "Administrative Experience",
            fields: [{ type: "string", name: "item", label: "Item" }]
          },
          {
            type: "object", list: true, name: "publicationSummary", label: "Publication Details",
            fields: [{ type: "string", name: "item", label: "Item" }]
          },
          {
            type: "object", list: true, name: "patents", label: "Patents (Summary)",
            fields: [{ type: "string", name: "item", label: "Item" }]
          },
          {
            type: "object", list: true, name: "supervision", label: "Research Supervision",
            fields: [{ type: "string", name: "item", label: "Item" }]
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
