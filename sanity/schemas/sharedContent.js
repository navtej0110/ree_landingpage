import { defineType, defineField } from "sanity";

const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "sharedContent",
  title: "Header & Footer Content",
  type: "document",
  groups: [
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
  ],
  initialValue: {
    ctaButtonText: "Contact Us",
    footerTagline: "Retail Automation Consulting",
    footerDescription: "We automate what slows you down. So you can grow.",
    footerEmail: "hello@agency.io",
    footerCopyright: "2026 REe. All rights reserved.",
    footerBottomText:
      "Retail automation consulting · Fashion · Secondhand · Merchandising · Software engineering",
  },
  fields: [
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      group: "header",
      description: "Remove all items to restore default navigation.",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "URL", type: "string" },
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      group: "header",
      description: d("Contact Us"),
    }),
    defineField({
      name: "footerTagline",
      title: "Tagline",
      type: "string",
      group: "footer",
      description: d("Retail Automation Consulting"),
    }),
    defineField({
      name: "footerDescription",
      title: "Description",
      type: "string",
      group: "footer",
      description: d("We automate what slows you down. So you can grow."),
    }),
    defineField({
      name: "footerEmail",
      title: "Email",
      type: "string",
      group: "footer",
      description: d("hello@agency.io"),
    }),
    defineField({
      name: "footerCopyright",
      title: "Copyright Text",
      type: "string",
      group: "footer",
      description: d("2026 REe. All rights reserved."),
    }),
    defineField({
      name: "footerBottomText",
      title: "Bottom Text",
      type: "string",
      group: "footer",
      description: d("Retail automation consulting · Fashion · Secondhand · Merchandising · Software engineering"),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Header & Footer Content" };
    },
  },
});
