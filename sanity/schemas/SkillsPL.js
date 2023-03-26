import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skillsPL',
  title: 'SkillsPL',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    }),
  ],
})
